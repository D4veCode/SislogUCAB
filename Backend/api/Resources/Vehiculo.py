from flask_restful import Resource, reqparse, fields, marshal
from flask_jwt_extended import jwt_required
import api.db as database

veh_parse = reqparse.RequestParser()

veh_parse.add_argument('placa', required=True)
veh_parse.add_argument('peso', required=True)
veh_parse.add_argument('cap_c', required=True)
veh_parse.add_argument('descripcion', required=True)
veh_parse.add_argument('color', required=True)
veh_parse.add_argument('fecha_v', required=True)
veh_parse.add_argument('serial_m', required=True)
veh_parse.add_argument('serial_c', required=True)
veh_parse.add_argument('fk_mod', required=True)
veh_parse.add_argument('fk_sucursal', required=True)

veh_fields = {
    'id': fields.Integer,
    'placa': fields.String,
    'cap_c': fields.Float,
    'peso': fields.Float,
    'descripcion': fields.String,
    'color': fields.String,
    'fecha_v': fields.DateTime('iso8601'),
    'serial_m': fields.String,
    'serial_c': fields.String,
    'modelo': fields.String,
    'fk_sucursal': fields.String
}


modelos_field ={
    'id': fields.Integer,
    'nombre': fields.String
}


class VehiculoList(Resource):
    @jwt_required
    def get(self):

        try:

            vehs = database.getVehiculos()
            return {"status": "success", "vehiculos": [marshal(veh, veh_fields) for veh in vehs]}, 200

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

    def post(self):

        try:

            args = veh_parse.parse_args()
            database.agregarVehiculo(args['placa'], args['peso'], args['cap_c'], args['descripcion'], args['color'],
                                     args['fecha_v'], args['serial_m'], args['serial_c'], args['fk_mod'],
                                     args['fk_sucursal'])
            return {"status": "success", "message": "Vehicle created. "}, 200

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500


class Vehiculo(Resource):
    @jwt_required
    def get(self, id):

        try:

            veh = database.getVehiculo(id)[0]
            return {"status": "success", "vehiculo": marshal(veh, veh_fields)}

        except Exception:

            return {"status": "fail", "error": "Vehicle not found"}, 404

    def put(self, id):

        try:

            args = veh_parse.parse_args()

            database.updateVehiculo(id, args['placa'], args['peso'], args['cap_c'], args['descripcion'], args['color'],
                                    args['fecha_v'], args['serial_m'], args['serial_c'], args['fk_mod'],
                                    args['fk_sucursal'])

            return {"status": "success", "message": "Vehicle updated."}

        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500

    def delete(self, id):

        try:

            database.deleteVehiculo(id)

            return {"status": "success", "message": "Vehicle deleted."}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500


class ModeloList(Resource):
    def get(self):
        try:
            modelos = database.getModelos()
            return {"status": "success", "modelos": [marshal(mod, modelos_field) for mod in modelos]}
        except Exception as e:
            return {"status": "fail", "error": str(e)}, 500