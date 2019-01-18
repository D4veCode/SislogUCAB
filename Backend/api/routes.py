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
import api.Resources.Reportes as rep

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
api.add_resource(rep.ListadoSuc, '/reporte1')
api.add_resource(rep.MediosTrans, '/reporte2')
api.add_resource(rep.ListadoEmp, '/reporte3')
api.add_resource(rep.CantEmp, '/reporte4')
api.add_resource(rep.ListadoRutas, '/reporte5')
api.add_resource(rep.MedioMasUsado, '/reporte6')
api.add_resource(rep.SucursalMasRecibidos, '/reporte7') 
api.add_resource(rep.SucursalMasEnviados, '/reporte8') 
api.add_resource(rep.MesMasEnvia, '/reporte9') 
api.add_resource(rep.PesoPromedio, '/reporte10') 
api.add_resource(rep.SucursalMasTransitada, '/reporte11') 
api.add_resource(rep.ListadoVehSuc, '/reporte12') 
api.add_resource(rep.FlotaTerrestre, '/reporte13') 
api.add_resource(rep.SucPorEstado, '/reporte14') 
api.add_resource(rep.Asistencia, '/reporte15') 
api.add_resource(rep.SucPuertoAero, '/reporte16') 
api.add_resource(rep.RutMasUsada, '/reporte17') 
api.add_resource(rep.TalleresPorZona, '/reporte18')  
api.add_resource(rep.ListadoAcciones, '/reporte19')  
api.add_resource(rep.ListadoEmpPorHorario, '/reporte20')