from flask_restful import Resource, reqparse, fields, marshal
import api.db as database
from flask_jwt_extended import jwt_required

paq_parse = reqparse.RequestParser()

paq_parse.add_argument('num_g')
paq_parse.add_argument('peso')
paq_parse.add_argument('monto')
paq_parse.add_argument('fk_cliente')
paq_parse.add_argument('fk_trans')
paq_parse.add_argument('alto')
paq_parse.add_argument('largo')
paq_parse.add_argument('ancho')

paq_fields = {
    'id': fields.Integer,
    'num_g': fields.String,
    'peso': fields.Float,
    'monto': fields.Float,
    'fk_cliente': fields.String,
    'fk_trans': fields.String,
    'alto': fields.Float,
    'largo': fields.Float,
    'ancho': fields.Float,
}


class PaqueteList(Resource):
    @jwt_required
    def get(self):

        try:
            paqs = database.getPaquetes()

            return {"status": "success", "paquetes": [marshal(paq, paq_fields) for paq in paqs]}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

    def post(self):

        try:
            data = paq_parse.parse_args()

            database.agregarPaquete(data['num_g'], data['peso'], data['monto'], data['fk_cliente'], data['fk_trans'],
                                data['alto'], data['largo'], data['ancho'])

            return {"status": "success", "message": "Package created."}, 201

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500