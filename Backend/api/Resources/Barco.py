from flask_restful import Resource, reqparse, fields, marshal
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

}


class BarcoList(Resource):

    def get(self):

        try:

            barcos = database.getBarcos()

            return {"status": "success", "barcos": [marshal(bar, bar_fields) for bar in barcos]}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

    def post(self):

        try:
            args = barco_parse.parse_args()

            database.agregarBarco(args['sucursal'], args['nombre'], args['descripcion'], args['peso'], args['cap_c'],
                                  args['vmax'], args['long'])

            return {"status": "success", "message": "Boat created."}, 200

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

