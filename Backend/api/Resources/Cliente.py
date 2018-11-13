from flask_restful import Resource,reqparse, fields, marshal
import api.db as database



cli_parse = reqparse.RequestParser()

cli_parse.add_argument('nombre', required=True)
cli_parse.add_argument('apellido', required=True)
cli_parse.add_argument('ci', required=True)
cli_parse.add_argument('email', required=True)
cli_parse.add_argument('est_civil', choices=('soltero', 'casado','divorciado','viudo'))
cli_parse.add_argument('nombre_empresa')
cli_parse.add_argument('l_vip', default=False)
cli_parse.add_argument('f_nacimiento')
cli_parse.add_argument('fk_lugar', type=int)
cli_parse.add_argument('fk_usuario', type=int)
cli_parse.add_argument('fk_carnet', type=int)

cli_fields = {
    'cod': fields.Integer,
    'nombre': fields.String,
    'apellido': fields.String,
    'ci': fields.String,
    'estado_civil': fields.String,
    'nombre_empresa': fields.String,
    'lvip': fields.Boolean,
    'fecha_nacimiento': fields.DateTime('iso8601')
}

class ClienteList(Resource):

    def get(self):

        clientes = database.getClientes()
        return {"clientes": [marshal(cli, cli_fields) for cli in clientes]}, 201

    def post(self):

        args = cli_parse.parse_args()
        db = database


        if(args['est_civil']):

            db.agregarCliente(3, args['nombre'], args['ci'], args['apellido'], args['email'], args['l_vip'], args['fk_lugar'], args['f_nacimiento'], args['est_civil'])
            return {"success": True}, 201

        elif(args['nombre_empresa']):

            db.agregarCliente(3, args['nombre'], args['ci'], args['apellido'], args['email'], args['l_vip'], args['fk_lugar'], args['f_nacimiento'], None, args['nombre_empresa'])

            return {'success': True}, 201








