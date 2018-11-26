from flask_restful import Resource, reqparse, fields, marshal
import api.db as database

sucu_parse = reqparse.RequestParser()

sucu_parse.add_argument('nombre', required=True)
sucu_parse.add_argument('email', required=True)
sucu_parse.add_argument('cap_m2', required=True)
sucu_parse.add_argument('cap_alm', required=True)
sucu_parse.add_argument('tamano', required=True)
sucu_parse.add_argument('fk_lugar', required=True)

suc_fields ={
    'cod': fields.Integer,
    'nombre': fields.String,
    'cap_m2': fields.Integer,
    'cap_alm': fields.Integer,
    'tamano': fields.Integer,
    'fk_lugar': fields.Integer
}

class SucursalList(Resource):

    def get(self):

        try:

            sucursales = database.getSucursales()

            return {"status": "success", "sucursales": [marshal(suc, suc_fields) for suc in sucursales]}

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

class Sucursal(Resource):

    def get(self, id):

        try:

            sucursal = database.getSucursal(id)[0]

            return {"status": "success", "sucursal": marshal(sucursal, suc_fields)}

        except Exception:

            return {"status": "fail", "error": "Office not found"}, 404

    def put(self, id):

        try:
            args = sucu_parse.parse_args()
            database.updateSucursal(id, args['nombre'], args['nombre'], args['nombre'], args['nombre'],
                                    args['nombre'], args['nombre'])
            return {"status": "success", "message": "Office updated."}, 201

        except Exception as e:

            return {"status": "fail", "error": str(e)}, 500

    def delete(self, id):

        try:

            database.deleteSucursal(id)

            return {"status": "success", "message": "Office deleted."}, 201

        except Exception as e:

            return {"status": "success", "error": str(e)}, 500
