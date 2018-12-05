from flask_restful import Resource, reqparse, fields, marshal
import api.db as database
from flask_jwt_extended import jwt_required

avion_parse = reqparse.RequestParser()

avion_parse.add_argument('nombre', required=True)
avion_parse.add_argument('peso', required=True)
avion_parse.add_argument('cap_c', required=True)
avion_parse.add_argument('descipcion', required=True)
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

avion_fields = {

}


class AvionList(Resource):
    @jwt_required
    def get(self, suc=None):
        try:
            if suc:
                aviones = database.getAviones(suc)
                return {"status": "success", "aviones": [marshal(av, avion_fields) for av in aviones]}
            else:
                aviones = database.getAviones()
                return {"status": "success", "aviones": [marshal(av, avion_fields) for av in aviones]}
        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500
