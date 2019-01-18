from flask_restful import Resource, reqparse, fields, marshal
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_claims
import api.db as database

report3_fields = {
    'cedula': fields.String,
    'nombre': fields.String,
    'apellido': fields.String,
    'email': fields.String,
    'nacimiento': fields.DateTime('iso8601'),
    'direccion': fields.String,
    'zona de trabajo': fields.String
}

asistencia_fields = {
    'fecha': fields.DateTime('iso8601'),
    'hora de entrada': fields.DateTime('iso8601'),
    'hora de salida': fields.DateTime('iso8601'),
    'idempleado': fields.Integer,
    'nombreempleado': fields.String
}

accion_fields = {
    'username': fields.String,
    'nombre_rol': fields.String,
    'fecha_accion': fields.DateTime('iso8601'),
    'tipo_priv': fields.String
}

list_emp_fields = {
    'sucursal': fields.String,
    'nombre': fields.String,
    'apellido': fields.String,
    'zona': fields.String,
    'dia': fields.String,
    'hora de entrada': fields.DateTime('iso8601'),
    'hora de salida': fields.DateTime('iso8601'),  
}


class ListadoSuc(Resource):
    @jwt_required
    def get(self):
        try:
            sucs = database.listadoSuc()

            return {'status': 'success', 'reporte1': sucs}, 200
        
        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500


class MediosTrans(Resource):
    @jwt_required
    def get(self):
        try:
            mets = database.mediosTrans()
            return {'status': 'success', 'reporte2': mets}, 200
        
        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500


class ListadoEmp(Resource):
    @jwt_required
    def get(self):
        try:
            emps = database.listadoEmp()
            return {'status': 'success', 'reporte3': [marshal(emp, report3_fields) for emp in emps]}, 200
        
        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500


class CantEmp(Resource):
    @jwt_required
    def get(self):
        try:
            cant_emp = database.cantEmp()[0] # cantidad de empleados
            return {'status': 'success', 'reporte4': cant_emp}, 200
        
        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500 


class ListadoRutas(Resource):
    @jwt_required
    def get(self):
        try:
            rutas = database.listadoRutas()
            return {'status': 'success', 'reporte5': rutas}, 200
        
        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500 


class MedioMasUsado(Resource):
    @jwt_required
    def get(self):
        try:
            medio = database.medioMasUsado()[0] 
            return {'status': 'success', 'reporte6': medio}, 200
        
        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500 


class SucursalMasRecibidos(Resource):
    @jwt_required
    def get(self):
        try:
            suc = database.sucursalMasRecibidos()[0]
            return {'status': 'success', 'reporte7': suc}, 200

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500 


class SucursalMasEnviados(Resource):
    @jwt_required
    def get(self):
        try:
            suc = database.sucursalMasEnviados()[0]
            return {'status': 'success', 'reporte8': suc}, 200

        except Exception as e:

            return {'status': 'fail', 'error': str(e)}, 500 


class MesMasEnvia(Resource):
    @jwt_required
    def get(self):
        try:
            mes = database.mesMasEnvia()[0]
            return {'status': 'success', 'reporte9': mes}, 200

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500 


class PesoPromedio(Resource):
    @jwt_required
    def get(self):
        try:
            peso = database.pesoPromedio()
            return {'status': 'success', 'reporte10': peso}, 200

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500 


class SucursalMasTransitada(Resource):
    @jwt_required
    def get(self):
        try:
            suc = database.sucursalMasTransPaquetes()[0]
            return {'status': 'success', 'reporte11': suc}, 200

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500 


class ListadoVehSuc(Resource):
    @jwt_required
    def get(self):
        try:
            vehs = database.listadoVehiculosSuc()
            return {'status': 'success', 'reporte12': vehs}, 200

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500 


class FlotaTerrestre(Resource):
    @jwt_required
    def get(self):
        try:
            flota = database.flotaTerrestre()
            return {'status': 'success', 'reporte13': flota}, 200

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500


class SucPorEstado(Resource):
    @jwt_required
    def get(self):
        try:
            sucs = database.sucporestado()
            return {'status': 'success', 'reporte14': sucs}, 200

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500


class Asistencia(Resource):
    @jwt_required
    def get(self):
        try:
            asis = database.asistencia()
            return {'status': 'success', 'reporte15': [marshal(asi, asistencia_fields) for asi in asis]}, 200

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500


class SucPuertoAero(Resource):
    @jwt_required
    def get(self):
        try:
            sucs = database.sucpuertoaero()
            return {'status': 'success', 'reporte16': sucs}, 200

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500


class RutMasUsada(Resource):
    @jwt_required
    def get(self):
        try:
            suc = database.sucmasusada()[0]
            return {'status': 'success', 'reporte17': suc}, 200

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500


class TalleresPorZona(Resource):
    @jwt_required
    def get(self):
        try:
            talls = database.tallerporzona()
            return {'status': 'success', 'reporte18': talls}, 200 

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500


class ListadoAcciones(Resource):
    @jwt_required
    def get(self):
        try:
            acciones = database.listadoacciones()
            return {'status': 'succes', 'reporte19': [marshal(acc, accion_fields) for acc in acciones]}, 200

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500


class ListadoEmpPorHorario(Resource):
    @jwt_required
    def get(self):
        try:
            list_emp = database.listadoempporzonahorario()
            return {'status': 'succes', 'reporte19': [marshal(emp, list_emp_fields) for emp in list_emp]}, 200

        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500
