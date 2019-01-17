from api import app
from flask_restful import Api

import api.Resources.Cliente as cli
import api.Resources.Empleado as emp
import api.Resources.Sucursal as suc
import api.Resources.Barco as barco
import api.Resources.Vehiculo as veh
import api.Resources.Avion as avion
import api.Resources.Ruta as ruta
import api.Resources.Lugar as lug
import api.Resources.Rol as rol
import api.Resources.Usuario as users
import api.Resources.Paquete as paq

api = Api(app, prefix='/api/v1')

api.add_resource(emp.HelloWorld, '/')
api.add_resource(emp.EmpleadoList, '/empleados')
api.add_resource(emp.RegistroEmpleado, '/empleado/registro')
api.add_resource(emp.Empleado, '/empleado/<int:id>')
api.add_resource(cli.ClienteList, '/clientes')
api.add_resource(cli.RegistroCliente, '/cliente/registro')
api.add_resource(cli.LoginCliente, '/cliente/login')
api.add_resource(cli.Cliente, '/cliente/<int:id>', endpoint='cliente')
api.add_resource(suc.SucursalList, '/sucursales')
api.add_resource(suc.Sucursal, '/sucursal/<int:id>', endpoint='sucursal')
api.add_resource(barco.BarcoList, '/barcos')
api.add_resource(barco.Barco, '/barco/<int:id>')
api.add_resource(veh.VehiculoList, '/vehiculos')
api.add_resource(veh.Vehiculo, '/vehiculo/<int:id>')
api.add_resource(lug.EstadoList, '/estados', endpoint='estado')
api.add_resource(lug.MunicipioList, '/municipios/<int:id>', endpoint='municipio')
api.add_resource(lug.ParroquiaList, '/parroquias/<int:id>', endpoint='parroquia')
api.add_resource(avion.AvionList, '/aviones')
api.add_resource(avion.Avion, '/avion/<int:id>')
api.add_resource(rol.RolList, '/roles')
api.add_resource(rol.Rol, '/rol/<int:id>')
api.add_resource(users.UsuarioList, '/users')
api.add_resource(ruta.RutaList, '/rutas')
api.add_resource(ruta.Ruta, '/ruta/<int:id>')
api.add_resource(ruta.MetodoTransp, '/met_trans')
api.add_resource(veh.ModeloList, '/modelos')
api.add_resource(paq.PaqueteList, '/paquetes')
api.add_resource(rol.RolLogin, '/getrol')
api.add_resource(cli.GenerarCarnet, '/generarseq')