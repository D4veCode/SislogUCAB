from flask_restful import Resource, reqparse, fields, marshal
from flask_jwt_extended import jwt_required
import api.db as database

barco_parse = reqparse.RequestParser()

barco_parse.add_argument('nombre', required=True)
barco_parse.add_argument('descripcion', required=True)
barco_parse.add_argument('vmax', required=True)
barco_parse.add_argument('long', required=True)
barco_parse.add_argument('fk_sucursal', required=True)


bar_fields = {
    'id': fields.Integer,
    'nombre': fields.String,
    'descripcion': fields.String,
    'vmax':  fields.Integer,
    'long': fields.Integer,
    'fk_sucursal': fields.String
}


class BarcoList(Resource):
    @jwt_required
    def get(self):

        try:

            barcos = database.getBarcos()
            return {"status": "success", "barcos": [marshal(bar, bar_fields) for bar in barcos]}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

    def post(self):

        try:
            args = barco_parse.parse_args()
            database.agregarBarco(args['nombre'], args['descripcion'], args['vmax'], args['long'], args['fk_sucursal'])
            return {"status": "success", "message": "Boat created."}, 200

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500


class Barco(Resource):
    @jwt_required
    def get(self, id):

        try:

            barco = database.getBarco(id)[0]
            return {"status": "success", "barco": marshal(barco, bar_fields)}

        except Exception:

            return{"status": "fail", "error": "Boat in office not found."}, 404

    def put(self, id):

        try:

            args= barco_parse.parse_args()

            database.updateBarco(id, args['nombre'], args['descripcion'], args['vmax'], args['long'], args['fk_sucursal'])

            return {"status": "success", "message": "Boat updated."}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

    def delete(self, id):

        try:

            database.deleteBarco(id)

            return {"status": "success", "message":  "The boat has been deleted."}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500