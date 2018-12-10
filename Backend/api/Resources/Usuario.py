from flask_restful import Resource, reqparse, fields, marshal
import api.db as database
from flask_jwt_extended import jwt_required

user_fields = {
    'id': fields.Integer,
    'username': fields.String,
    'rol': fields.String
}


class UsuarioList(Resource):
    @jwt_required
    def get(self):

        try:

            users = database.getUsuarios()

            return {"status": "success", "users": [marshal(user, user_fields) for user in users]}

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500
