from snmp import SNMPC
from flask_restplus import Namespace, Resource
 
snmpAux = SNMPC()

api = Namespace('SNMP', description='SNMP')

@api.route('/data')
@api.response(404, 'User not found')
@api.response(409, 'Error from the device')
@api.response(500, 'Server Error')
class SNMPUSER(Resource):
    @api.doc('Getting data of MIB-2')
    def post(self):
        try:
            yourIp = api.payload
            print(yourIp['ip'])
            if(yourIp['ip']):
                mib =  ['1.3.6.1.2.1.1.5.0', '1.3.6.1.2.1.1.6.0', '1.3.6.1.2.1.1.4.0', '1.3.6.1.2.1.1.1.0']
                aKey = ""
                pKey = ""
                usr = ""
                response = snmpAux.get(yourIp['ip'], mib, usr, aKey, pKey)
                if response:
                    return {'msg': response}, 
                else:
                    return response, 
            else:
                return response, 
        except ValueError as ve:
            api.abort(404)
        except Exception as e:
            print('Server Error', e)
            api.abort(500)
    
    @api.doc('Update data')
    def put(self):
        try:
            setData = api.payload
            data = {'ip': setData['ip'], 'host': setData['host'], 'location': setData['location'], 'contact': setData['contact']}
            mib =  {'1.3.6.1.2.1.1.5.0': setData['host'], '1.3.6.1.2.1.1.6.0': setData['location'], '1.3.6.1.2.1.1.4.0': setData['contact']}
            aKey = ""
            pKey = ""
            usr = ""
            response = snmpAux.set(setData['ip'], mib, usr, aKey, pKey)
            if response:
                return {'msg': response}, 200
            else:
                return response, 409
        except ValueError as ve:
            api.abort(404)
        except Exception as e:
            print('Server Error', e)
            api.abort(500)

@api.route('/packages')
@api.response(404, 'User not found')
@api.response(409, 'Error from the device')
@api.response(500, 'Server Error')
class Package(Resource):
    @api.doc('Getting packages')
    def post(self):
        try:
            data = api.payload
            packType= data['type']
            print(packType)
            aKey = data['aKey']
            pKey = data['pKey']
            usr = data['usr']
            if(packType=='salida'):
                response = snmpAux.get_paquetes_salida(usr, aKey, pKey)
            elif(packType=='entrada'):
                response = snmpAux.get_paquetes_entrada(usr, aKey, pKey)
            elif(packType=='daniado'):
                response = snmpAux.get_paquetes_daniados(usr, aKey, pKey)
            if response:
                return {'msg': response}, 
            else:
                return response, 
        except ValueError as ve:
            api.abort(404)
        except Exception as e:
            print('Server Error', e)
            api.abort(500)