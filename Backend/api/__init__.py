from flask import Flask, jsonify
from flask_jwt_extended import JWTManager
from datetime import timedelta
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
app.config['JWT_SECRET_KEY'] = 'ac4c4a929750591f43b9a278f5374747e76ed6766f041876'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=15)
jwt = JWTManager(app)


@jwt.unauthorized_loader
def unauthorized_custom(error):
    return jsonify({"error": error}), 401

@jwt.expired_token_loader
def expiredtoken_custom():
    return jsonify({"error": "Token has expired"}), 401

@jwt.user_claims_loader
def add_claims_to_access_token(identity):
     return {
         'username': identity,
         'rol': getRol(identity)
    }

from api import db, routes
from api.helpers import getRol
