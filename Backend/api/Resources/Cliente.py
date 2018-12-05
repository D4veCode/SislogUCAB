from flask_restful import Resource, reqparse, fields, marshal
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_claims
import api.db as database
from api.helpers import check_password, encrypt_password


cli_parse = reqparse.RequestParser()

cli_parse.add_argument('nombre', required=True)
cli_parse.add_argument('apellido', required=True)
cli_parse.add_argument('cedula', required=True)
cli_parse.add_argument('email', required=True)
cli_parse.add_argument('edo_c', choices=('s', 'c', 'd', 'v'))
cli_parse.add_argument('nombre_e')
cli_parse.add_argument('l_vip', default=False)
cli_parse.add_argument('fecha_n')
cli_parse.add_argument('fk_lugar', type=int)
cli_parse.add_argument('username', required=True)
cli_parse.add_argument('password', required=True)

cli_fields = {
    'id': fields.Integer,
    'nombre': fields.String,
    'apellido': fields.String,
    'cedula': fields.String,
    'edo_c': fields.String,
    'nombre_e': fields.String,
    'l_vip': fields.Boolean,
    'fecha_n': fields.DateTime('iso8601'),
    'username': fields.String
}

login_parser = reqparse.RequestParser()

login_parser.add_argument('username', required=True)
login_parser.add_argument('password', required=True)


class ClienteList(Resource):
    @jwt_required
    def get(self):
        try:
            clientes = database.getClientes()
            return {"clientes": [marshal(cli, cli_fields) for cli in clientes]}, 200
        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500


class RegistroCliente(Resource):

    def post(self):
        try:
            data = cli_parse.parse_args()
            if data['edo_c']:

                password = encrypt_password(data['password'])
                user = database.agregarUser(data['username'], password,1)[0].get("id")
                database.agregarCliente(user, data['nombre'], data['cedula'], data['apellido'], data['email'], data['l_vip'],
                                  data['fk_lugar'], data['fecha_n'], data['edo_c'])
                token = create_access_token(identity=data['username'])
                return {"status": "success", "message": "Client registered", "token": token}, 201

            elif data['nombre_e']:

                password = encrypt_password(data['password'])
                user = database.agregarUser(data['username'], password, 1)
                database.agregarCliente(user, data['nombre'], data['cedula'], data['apellido'], data['email'], data['l_vip'],
                                  data['fk_lugar'], data['fecha_n'], None, data['nombre_e'])
                token = create_access_token(identity=data['username'])
                return {'status': "success", "message": "Client registered", "token": token}, 201

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500


class LoginCliente(Resource):

    def post(self):

        try:
            data = login_parser.parse_args()
            user = database.getUser(data['username'])[0]
            print(user['password'])
            if user:
                if check_password(user['password'], data['password']):
                    token = create_access_token(identity=data['username'])
                    return {"status": "success", "token": token}
                else:
                    return {"status": "fail", "message": "Incorrect Password"}, 401
            else:
                return {"status": "fail", "message": "This user does not exist"}, 404

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500


class Cliente(Resource):
    @jwt_required
    def get(self, id):

        try:
            cliente = database.getCliente(id)[0]
            return {"cliente": marshal(cliente, cli_fields)}

        except Exception as e:
            if e == IndexError:
                return {"status": "fail", "error": "Client not found"}, 404
            else:
                return {"status": "fail", "error": str(e)}, 500

    def put(self, id):

            try:
                data = cli_parse.parse_args()
                database.updateCliente(id, data['nombre'], data['cedula'], data['apellido'], data['email'], data['l_vip'],
                                   data['fk_lugar'], data['fecha_n'], data['edo_c'], data['nombre_e'])

                return {"status": "success", "message": "The client has been updated."}

            except Exception as e:

                return {"status": "fail", "error": str(e)}, 500
