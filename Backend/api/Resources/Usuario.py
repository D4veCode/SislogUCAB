from flask_restful import Resource, fields, marshal
import api.db as database
from flask_jwt_extended import jwt_required

user_fields = {
    'id': fields.Integer,
    'username': fields.String,
    'fk_rol': fields.String
}


class UsuarioList(Resource):
    @jwt_required
    def get(self):

        try:

            users = database.getUsers()

            return {"status": "success", "users": [marshal(user, user_fields) for user in users]}

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500
