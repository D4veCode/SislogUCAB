from api import app
from flask_restful import Api

import api.Resources.Cliente as cli
import api.Resources.Empleado as cont
import api.Resources.Sucursal as suc

api = Api(app)

api.add_resource(cont.HelloWorld, '/')
api.add_resource(cli.ClienteList, '/api/v1/clientes')
api.add_resource(cli.Cliente, '/api/v1/cliente/<int:id>')
api.add_resource(suc.SucursalList, '/api/v1/sucursales')
api.add_resource(suc.Sucursal, '/api/v1/sucursal/<int:id>')