import os
from .controller import router_usuario
import pymongo
from Crypto.Hash import SHA256
from pymongo.collection import ReturnDocument
from flask_restplus import Namespace, Resource, fields
myclient = pymongo.MongoClient(os.getenv("DB_CONN"))
db = myclient[os.getenv("DB_NAME")]
app_users_col = db["device_user"]
app_users_col.create_index("username", unique=True)

api = Namespace('device_user', description='app users related operations')

device_user = api.model('DEVICE_USER_CREATION', {
    "ip": fields.String(description='Device ip'),
    "admin": fields.String(description='admin username in device'),
    "adminPass": fields.String(description='admin password in device'),
    "username": fields.String(description='Username in device'),
    "password": fields.String(description='Password of the user in device'),
})
device_user_delete = api.model('DEVICE_USER_DELETE', {
    "ip": fields.String(description='Device ip'),
    "admin": fields.String(description='admin username in device'),
    "adminPass": fields.String(description='admin password in device'),
   })
device_user_update = api.model('DEVICE_USER_UPDATE', {
    "ip": fields.String(description='Device ip'),
    "admin": fields.String(description='admin username in device'),
    "adminPass": fields.String(description='admin password in device'),
    "password": fields.String(description='Password of the user in device'),
})

device_user_routing = api.model('DEVICE_USER_ROUTING', {
    "ip": fields.String(description='Device ip'),
    "admin": fields.String(description='admin username in device'),
    "adminPass": fields.String(description='admin password in device'),
    "protocol": fields.String(description='Username in device'),
})


@api.route('/router/protocol')
@api.response(404, 'User not found')
@api.response(409, 'Error from the device')
@api.response(500, 'Server Error')
class Routing(Resource):
    @api.doc('put_app_protocol')
    @api.expect(device_user_routing)
    def put(self):
        try:
            req = api.payload
            success, resp = configuracion_router.cambiar_enrutamiento(
                req['ip'], req['admin'], req['adminPass'], req['protocol'])
            if success:
                return {'msg': 'Updated routing'}, 201
            else:
                return resp, 409
        except ValueError as ve:
            api.abort(404)
        except Exception as e:
            print('Server Error', e)
            api.abort(500)




@api.route('/router/')
@api.response(404, 'User not found')
@api.response(409, 'Error from the device')
@api.response(500, 'Server Error')
class UserCreation(Resource):
    @api.doc('get_app_users')
    @api.expect(device_user)
    def post(self):
        try:
            req = api.payload
            new_user = {'username': req['username']}
            result_id = app_users_col.insert_one(new_user).inserted_id
            success, resp = router_usuario.nuevo_usuario(
                req['ip'], req['admin'], req['adminPass'], req['username'], req['password'])
            if result_id and success:
                return {'msg': 'Created'}, 201
            else:
                return resp, 409
        except ValueError as ve:
            api.abort(404)
        except Exception as e:
            print('Server Error', e)
            api.abort(500)

    @api.doc('put_app_users')
    @api.expect(device_user_update)
    def put(self):
        try:
            req = api.payload
            success, resp = router_usuario.modifica_usuario(
                req['ip'], req['username'], req['password'], req['newPassword'])
            if success:
                return {'msg': 'Updated'}, 201
            else:
                return resp, 409
        except ValueError as ve:
            api.abort(404)
        except Exception as e:
            print('Server Error', e)
            api.abort(500)

    @api.doc('delete_app_users')
    @api.expect(device_user_delete)
    def delete(self):
        try:
            req = api.payload
            result = app_users_col.find_one_and_delete(
                {'username': req['username']})
            success, resp = router_usuario.elimina_usuario(
                req['ip'], req['username'], req['password'])
            if result and success:
                return {'msg': 'Deleted'}, 201
            else:
                return resp, 409
        except ValueError as ve:
            api.abort(404)
        except Exception as e:
            print('Server Error', e)
            api.abort(500)


