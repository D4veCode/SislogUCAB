from flask_restful import Resource, reqparse, fields, marshal
import api.db as database
from api.helpers import check_password, encrypt_password

cli_parse = reqparse.RequestParser()

cli_parse.add_argument('nombre', required=True)
cli_parse.add_argument('apellido', required=True)
cli_parse.add_argument('ci', required=True)
cli_parse.add_argument('email', required=True)
cli_parse.add_argument('est_civil', choices=('s', 'c', 'd', 'v'))
cli_parse.add_argument('nombre_empresa')
cli_parse.add_argument('l_vip', default=False)
cli_parse.add_argument('f_nacimiento')
cli_parse.add_argument('fk_lugar', type=int)
cli_parse.add_argument('fk_usuario', type=int)
cli_parse.add_argument('fk_carnet', type=int)
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

    def get(self):
        try:
            clientes = database.getClientes()
            return {"clientes": [marshal(cli, cli_fields) for cli in clientes]}, 201
        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500


class RegistroCliente(Resource):

    def post(self):
        try:
            args = cli_parse.parse_args()

            if args['est_civil']:

                password = encrypt_password(args['password'])
                user = database.agregarUser(args['username'], password,1)[0].get("id")
                database.agregarCliente(user, args['nombre'], args['ci'], args['apellido'], args['email'], args['l_vip'],
                                  args['fk_lugar'], args['f_nacimiento'], args['est_civil'])

                return {"status": "success", "message": "Client registered"}, 201

            elif args['nombre_empresa']:

                password = encrypt_password(args['password'])
                user = database.agregarUser(args['username'], password, 1)
                database.agregarCliente(user, args['nombre'], args['ci'], args['apellido'], args['email'], args['l_vip'],
                                  args['fk_lugar'], args['f_nacimiento'], None, args['nombre_empresa'])

                return {'status': "success", "message": "Client registered"}, 201

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500


class LoginCliente(Resource):

    def post(self):

        try:
            args = login_parser.parse_args()
            user = database.getUser(args['username'])[0]

            if user:
                if check_password(user['password'], args['password']):
                    return {"status": "success"}
                else:
                    return {"status": "fail", "message": "Incorrect Password"}, 401
            else:
                return {"status": "fail", "message": "This user does not exist"}, 404

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 503


class Cliente(Resource):

    def get(self, id):

        try:
            cliente = database.getCliente(id)[0]
            print(cliente)
            return {"cliente": marshal(cliente, cli_fields)}

        except Exception as e:
            if e == IndexError:
                return {"status": "fail", "error": "Client not found"}, 404
            else:
                return {"status": "fail", "error": str(e)}, 500

    def put(self, id):

            try:
                args = cli_parse.parse_args()
                database.updateCliente(id, args['nombre'], args['ci'], args['apellido'], args['email'], args['l_vip'],
                                   args['fk_lugar'], args['f_nacimiento'], args['est_civil'], args['nombre_empresa'])

                return {"status": "success", "message": "The client has been updated."}

            except Exception as e:

                return {"status": "fail", "error": str(e)}, 500
