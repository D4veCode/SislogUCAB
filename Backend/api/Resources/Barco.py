from flask_restful import Resource, reqparse, fields, marshal
from flask_jwt_extended import jwt_required
import api.db as database

barco_parse = reqparse.RequestParser()

barco_parse.add_argument('nombre', required=True)
barco_parse.add_argument('descripcion', required=True)
barco_parse.add_argument('peso', required=True)
barco_parse.add_argument('cap_c', required=True)
barco_parse.add_argument('vmax', required=True)
barco_parse.add_argument('long', required=True)
barco_parse.add_argument('sucursal', required=True)


bar_fields = {
    'id': fields.Integer,
    'nombre': fields.String,
    'descripcion': fields.String,
    'peso': fields.Integer,
    'cap_c': fields.Integer,
    'vmax':  fields.Integer,
    'long': fields.Integer
}


class BarcoList(Resource):
    @jwt_required
    def get(self, suc=None):

        try:
            if suc:
                barcos = database.getBarcos(suc)

                return {"status": "success", "barcos": [marshal(bar, bar_fields) for bar in barcos]}
            else:

                barcos = database.getBarcos()

                return {"status": "success", "barcos": [marshal(bar, bar_fields) for bar in barcos]}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

    def post(self):

        try:
            args = barco_parse.parse_args()

            idBarco = database.crearBarco(args['nombre'], args['descripcion'], args['peso'], args['cap_c'],
                                  args['vmax'], args['long'])

            database.agregarBarco(idBarco, args['sucursal'])

            return {"status": "success", "message": "Boat created."}, 200

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500


class Barco(Resource):
    @jwt_required
    def get(self, suc, id):

        try:

            barco = database.getBarco(suc, id)[0]

            return {"status": "success", "barco": marshal(barco, bar_fields)}

        except Exception:

            return{"status": "fail", "error": "Boat in office {suc} not found."}, 404

    def put(self, suc, id):

        try:

            args= barco_parse.parse_args()

            database.updateBarco(suc, id, args['nombre'], args['descripcion'], args['peso'], args['cap_c'],
                                args['vmax'], args['long'])

            return {"status": "success", "message": "Boat updated."}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

    def delete(self, suc, id):

        try:

            database.deleteBarco(suc, id)

            return {"status": "success", "message":  "The boat has been deleted."}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500