from flask_restful import Resource, reqparse, fields, marshal
import api.db as database
from flask_jwt_extended import jwt_required, get_jwt_claims

rol_parse = reqparse.RequestParser()

rol_parse.add_argument('nombre', required=True)
rol_parse.add_argument('tipo', required=True)

rol_fields = {
    'id': fields.Integer,
    'tipo': fields.String,
    'nombre': fields.String
}

class RolList(Resource):
    @jwt_required
    def get(self):

        try:
            roles = database.getRoles()

            return {"status": "success", "roles": [marshal(rol, rol_fields) for rol in roles]}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

    def post(self):

        try:
            data = rol_parse.parse_args()

            database.agregarRol(data['nombre'], data['tipo'])

            return {"status": "success", "message": "Rol created."}, 201

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

class Rol(Resource):
    @jwt_required
    def get(self, id):

        try:
            rol = database.getRol(id)[0]

            return {"status": "success", "rol": marshal(rol, rol_fields)}

        except Exception:

            return {"status": "fail", "error": "Rol not found "}, 404

    def put(self, id):

        try:

            data = rol_parse.parse_args()

            database.updateRol(id, data['nombre'], data['tipo'])

            return {"status": "success", "message": "Rol updated"}
        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

    def delete(self, id):

        try:

            database.deleteRol(id)

            return {"status": "success", "message": "Rol deleted"}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500


class RolLogin(Resource):
    @jwt_required
    def get(self):
        data = get_jwt_claims()
        return data