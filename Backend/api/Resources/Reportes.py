from flask_restful import Resource, reqparse, fields, marshal
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_claims
import api.db as database

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
            return {'status': 'success', 'reporte3': emps}, 200
        
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


class RutaMasUsada(Resource):
    @jwt_required
    def get(self):
        try:
            ruta = database.rutaMasUsada()
            return {'status': 'success', 'reporte6': ruta}, 200
        
        except Exception as e:
            return {'status': 'fail', 'error': str(e)}, 500 
