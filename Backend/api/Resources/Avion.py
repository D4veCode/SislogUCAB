from flask_restful import Resource, reqparse, fields, marshal
import api.db as database
from flask_jwt_extended import jwt_required

avion_parse = reqparse.RequestParser()

avion_parse.add_argument('nombre', required=True)
avion_parse.add_argument('peso', required=True)
avion_parse.add_argument('cap_c', required=True)
avion_parse.add_argument('descripcion', required=True)
avion_parse.add_argument('long', required=True)
avion_parse.add_argument('env', required=True)
avion_parse.add_argument('alt', required=True)
avion_parse.add_argument('ancho_c', required=True)
avion_parse.add_argument('diametro', required=True)
avion_parse.add_argument('peso_maxd', required=True)
avion_parse.add_argument('carrera_d', required=True)
avion_parse.add_argument('vmax', required=True)
avion_parse.add_argument('fuel_c', required=True)
avion_parse.add_argument('motor', required=True)
avion_parse.add_argument('area', required=True)
avion_parse.add_argument('fk_sucursal', required=True)

avion_fields = {
    'nombre': fields.String,
    'peso': fields.Float,
    'cap_c': fields.Float,
    'descripcion': fields.String,
    'long': fields.Float,
    'env': fields.Float,
    'alt': fields.Float,
    'ancho_c': fields.Float,
    'diametro': fields.Float,
    'peso_maxd': fields.Float,
    'carrera_d': fields.Integer,
    'vmax': fields.Integer,
    'fuel_c': fields.Integer,
    'motor': fields.String,
    'area': fields.Integer,
    'fk_sucursal': fields.String
}


class AvionList(Resource):
    @jwt_required
    def get(self):
        try:

            aviones = database.getAviones()
            return {"status": "success", "aviones": [marshal(av, avion_fields) for av in aviones]}
        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500

    def post(self):

        try:
            data = avion_parse.parse_args()
            database.agregarAvion(data['nombre'], data['peso'], data['cap_c'], data['descripcion'], data['long'],
                                  data['env'], data['alt'], data['ancho_c'], data['diametro'], data['peso_maxd'],
                                  data['carrera_d'], data['vmax'], data['fuel_c'], data['motor'], data['area'],
                                  data['fk_sucursal'])
            return {"status": "success", "message": "Airplane registered. "}, 201

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500


class Avion(Resource):
    @jwt_required
    def get(self, id):

        try:
            avion = database.getAvion(id)
            return {"status": "success", "avion": marshal(avion, avion_fields)}

        except Exception as e:
            return {"status": "fail", "error": "Airplane not found. ", "msg": str(e)}, 404

    def put(self, id):

        try:
            data = avion_parse.parse_args()
            database.updateAvion(id, data['nombre'], data['peso'], data['cap_c'], data['descripcion'], data['long'],
                                  data['env'], data['alt'], data['ancho_c'], data['diametro'], data['peso_maxd'],
                                  data['carrera_d'], data['vmax'], data['fuel_c'], data['motor'], data['area'],
                                  data['fk_sucursal'])
            return {"status": "success", "message": "Airplane updated. "}
        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500

    def delete(self, id):

        try:

            database.deleteAvion(id)
            return {"status": "success", "message": "Airplane deleted. "}

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500

