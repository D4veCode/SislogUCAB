from api import app
from flask_restful import Api

import api.Resources.Cliente as cli
import api.Resources.controllers as cont
api = Api(app)



api.add_resource(cont.HelloWorld, '/')
api.add_resource(cli.ClienteList, '/clientes')