from flask_restful import Resource, fields, marshal
import api.db as database

lugar_fields = {
    'id': fields.Integer,
    'tipo': fields.String,
    'nombre': fields.String,
    'fk_lugar': fields.String
}

class EstadoList(Resource):

    def get(self):

        try:

            estados = database.getEstados()

            return {"status": "success", "lugar": [marshal(est, lugar_fields) for est in estados]}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500


class MunicipioList(Resource):

    def get(self, id):

        try:

            municipios = database.getMunicipios(id)

            return {"status": "success", "lugar": [marshal(mun, lugar_fields) for mun in municipios]}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500


class ParroquiaList(Resource):

    def get(self, id):

        try:

            parroquias = database.getParroquias(id)

            return {"status": "success", "lugar": [marshal(parr, lugar_fields) for parr in parroquias]}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500