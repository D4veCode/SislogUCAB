from flask_restful import Resource, reqparse, fields, marshal
import api.db as database
from flask_jwt_extended import jwt_required

ruta_parse = reqparse.RequestParser()

ruta_parse.add_argument('origen', required=True)
ruta_parse.add_argument('destino', required=True)
ruta_parse.add_argument('m_trans', required=True)
ruta_parse.add_argument('tiempo', required=True)

ruta_field = {
    'id': fields.Integer,
    'suc_origen': fields.String,
    'suc_dest': fields.String,
    'tipo_trans': fields.String,
    'tiempo': fields.Integer
}

met_trans_field = {
    'id': fields.Integer,
    'tipo': fields.String
}


class RutaList(Resource):
    @jwt_required
    def get(self):

        try:
            rutas = database.getRutas()
            return {"status": "success", "rutas": [marshal(rut, ruta_field) for rut in rutas]}

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500

    def post(self):

        try:
            data = ruta_parse.parse_args()

            database.agregarRuta(data['origen'], data['destino'], data['m_trans'], data['tiempo'])

            return {"status": "success", "message": "Route registered. "}, 201

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500


class Ruta(Resource):
    @jwt_required
    def get(self, id):

        try:

            ruta = database.getRuta(id)[0]
            return {"status": "success", "ruta": marshal(ruta, ruta_field)}

        except Exception as e:
            return {"status": "fail", "error": "Route not found. ", "msg": str(e)}, 404

    def put(self, id):

        try:
            data = ruta_parse.parse_args()
            database.updateRuta(id, data['origen'], data['destino'], data['tiempo'], data['m_trans'])
            return {"status": "success", "message": "Route has been updated. "}

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500

    def delete(self, id):

        try:
            database.deleteRuta(id)
            return {"status": "success", "message": "Route has been deleted"}

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500


class MetodoTransp(Resource):
    @jwt_required
    def get(self):

        try:
            m_trans = database.getMtransp()

            return {"status": "success", "m_trans": [marshal(mt, met_trans_field) for mt in m_trans]}

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500