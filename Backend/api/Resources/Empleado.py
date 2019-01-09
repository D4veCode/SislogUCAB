from flask_restful import Resource, reqparse, fields, marshal
import api.db as database
from flask_jwt_extended import jwt_required
from api.helpers import check_password, encrypt_password
from api.Resources.Cliente import login_parser

emp_parse = reqparse.RequestParser()

emp_parse.add_argument('p_nombre', required=True)
emp_parse.add_argument('s_nombre')
emp_parse.add_argument('p_apellido', required=True)
emp_parse.add_argument('s_apellido')
emp_parse.add_argument('cedula', required=True)
emp_parse.add_argument('email_p', )
emp_parse.add_argument('email_e', required=True)
emp_parse.add_argument('fecha_n', required=True)
emp_parse.add_argument('nivel_acd', required=True)
emp_parse.add_argument('edo_c', required=True)
emp_parse.add_argument('profesion', required=True)
emp_parse.add_argument('num_h', required=True)
emp_parse.add_argument('fk_lugar', required=True)
emp_parse.add_argument('username', required=True)
emp_parse.add_argument('password', required=True)
emp_parse.add_argument('fk_emp')

emp_fields = {
    'id': fields.Integer,
    'p_nombre': fields.String,
    's_nombre': fields.String,
    'p_apellido': fields.String,
    's_apellido': fields.String,
    'cedula': fields.String,
    'email_p': fields.String,
    'email_e': fields.String,
    'fecha_n': fields.DateTime('iso8601'),
    'edo_c': fields.String,
    'nivel_acd': fields.String,
    'profesion': fields.String,
    'num_h': fields.Integer,
    'direccion': fields.String,
    'username': fields.String,
    'fk_emp': fields.String,
}


class HelloWorld(Resource):

    def get(self):
        return {"status": "success"}


class EmpleadoList(Resource):
    @jwt_required
    def get(self):

        try:

            empleados = database.getEmpleados()

            return {"status": "success", "empleados": [marshal(emp, emp_fields) for emp in empleados]}, 200

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500


class Empleado(Resource):
    @jwt_required
    def get(self, id):

        try:

            empleado = database.getEmpleado(id)[0]
            return {"status": "success", "empleado": marshal(empleado, emp_fields)}

        except Exception as e:

            return {"status": "fail", "error": "Employee not found", "msg": str(e)}, 404

    def put(self, id):

        try:
            args = emp_parse.parse_args()

            database.updateEmpleado(id, args['p_nombre'], args['s_nombre'], args['p_apellido'], args['s_apellido'],
                                    args['cedula'], args['email_e'], args['fecha_n'], args['nivel_acd'],
                                    args['edo_c'], args['profesion'], args['num_h'], args['fk_lugar'],
                                    args['fk_emp'], args['email_p'])
            user = database.getCliente(id)[0].get("username")

            pw = database.getUser(user)[0].get("password")
            if pw == args['password']:
                database.updateUser(user, args['username'], args['password'])
            else:
                passw = encrypt_password(args['password'])
                database.updateUser(user, args['username'], passw)
            return {"status": "success", "message": "The Employee has been updated."}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

    def delete(self, id):

        try:
            database.deleteEmpleado(id)

            return {"status": "success", "message": "Employee deleted."}

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
            user = database.agregarUser(args['username'], encrypt_password(args['password']), 1)[0].get("id")
            database.agregarEmpleado(args['p_nombre'], args['s_nombre'], args['p_apellido'], args['s_apellido'],
                                     args['cedula'], args['email_e'], args['fecha_n'], args['nivel_acd'],
                                     args['edo_c'], args['profesion'], args['num_h'], args['fk_lugar'],
                                     user, args['fk_emp'], args['email_p'])

            return {"status": "success", "message": "Employee registered."}, 201
        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500
