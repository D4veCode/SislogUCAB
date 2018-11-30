from flask_restful import Resource, reqparse, fields, marshal
import api.db as database
from api.helpers import check_password
from api.Resources.Cliente import login_parser
emp_parse = reqparse.RequestParser()

emp_parse.add_argument('p_nombre', required=True)
emp_parse.add_argument('s_nombre')
emp_parse.add_argument('p_apellido', required=True)
emp_parse.add_argument('s_apellido')
emp_parse.add_argument('cedula', required=True)
emp_parse.add_argument('email_p', )
emp_parse.add_argument('email_e', required=True)
emp_parse.add_argument('fecha_nac', required=True)
emp_parse.add_argument('nivel_acad', required=True)
emp_parse.add_argument('edo_civil', required=True)
emp_parse.add_argument('profesion', required=True)
emp_parse.add_argument('num_h', required=True)
emp_parse.add_argument('fk_lugar', required=True)
emp_parse.add_argument('fk_user')
emp_parse.add_argument('fk_emp')

emp_fields = {
    'cod': fields.Integer,
    'p_nombre': fields.String,
    's_nombre': fields.String,
    'p_apellido': fields.String,
    's_apellido': fields.String,
    'cedula': fields.String,
    'email_p': fields.String,
    'email_e': fields.String,
    'fecha_nac': fields.DateTime('iso8601'),
    'edo_civil': fields.String,
    'profesion': fields.String,
    'num_h': fields.Integer,
    'fk_lugar': fields.Integer,
    'fk_user': fields.Integer,
    'fk_emp': fields.Integer,
}




class HelloWorld(Resource):

    def get(self):
        return {"status": "success"}


class EmpleadoList(Resource):

    def get(self):

        try:

            empleados = database.getEmpleados()

            return {"status": "success", "empleados": [marshal(emp, emp_fields) for emp in empleados]}, 200

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

class Empleado(Resource):

    def get(self, id):

        try:

            empleado = database.getEmpleado(id)[0]
            return {"status": "success", "empleado": marshal(empleado, emp_fields)}

        except Exception:
            return {"status": "fail", "error": "Employee not found"}, 404

    def put(self, id):

        try:
            args = emp_parse.parse_args()
            database.updateEmpleado(id, args['p_nombre'], args['s_nombre'], args['p_apellido'], args['s_apellido'], args['cedula'], args['email_e'],
                args['fecha_nac'], args['nivel_acad'], args['edo_civil'], args['profesion'], args['num_h'], args['fk_lugar'], args['fk_user'], args['fk_emp'], args['email_p'])
            return {"status": "success", "message": "The Employee has been updated."}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500


    def delete(self, id):

        try:
            database.deleteEmpleado(id)

            return {"status": "successs", "message": "Employee deleted."}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500


class LoginEmpleado(Resource):

    def post(self):

        try:

            args = login_parser.parse_args()

            user = database.getUser(args['username'])[0]

            if check_password(user, args['password']):
                return {"status": "success"}, 201
            else:
                return {"status": "fail", "message": "Incorrect Password. "}, 401

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500


class RegistroEmpleado(Resource):

    def post(self):

        try:
            args = emp_parse.parse_args()

            database.agregarEmpleado(args['p_nombre'], args['s_nombre'], args['p_apellido'], args['s_apellido'], args['cedula'], args['email_e'],
                args['fecha_nac'], args['nivel_acad'], args['edo_civil'], args['profesion'], args['num_h'], args['fk_lugar'], args['fk_user'],
                args['fk_emp'], args['email_p'])

            return {"status": "success", "message": "Employee registered."}, 201
        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500