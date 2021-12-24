from pysnmp import hlapi
from pysnmp.hlapi import *

class SNMPC:
    def get(self, target, oids, usr, aKey, pKey):
        handler = hlapi.getCmd(
            hlapi.SnmpEngine(),
            hlapi.UsmUserData(usr, authKey = aKey, privKey = pKey, authProtocol=hlapi.usmHMACSHAAuthProtocol, privProtocol=hlapi.usmDESPrivProtocol),
            hlapi.UdpTransportTarget((target, 161)),
            hlapi.ContextData(),
            *self.constructObject(oids)
        )
        return self.fetch(handler, 1)[0]
    
    def getBulk(self, target, oids, usr, aKey, pKey, nonRepeaters, maxRepetitions):
        handler = hlapi.bulkCmd(
            hlapi.SnmpEngine(),
            hlapi.UsmUserData(usr, authKey = aKey, privKey = pKey, authProtocol=hlapi.usmHMACSHAAuthProtocol, privProtocol=hlapi.usmDESPrivProtocol),
            hlapi.UdpTransportTarget((target, 161)),
            hlapi.ContextData(),
            nonRepeaters, maxRepetitions,
            *self.constructObject(oids)
        )
        return self.fetch(handler, nonRepeaters)

    def set(self, target, values, usr, aKey, pKey):
            handler = hlapi.setCmd(
                hlapi.SnmpEngine(),
                hlapi.UsmUserData(usr, authKey = aKey, privKey = pKey, authProtocol=hlapi.usmHMACSHAAuthProtocol, privProtocol=hlapi.usmDESPrivProtocol),
                hlapi.UdpTransportTarget((target, 161)),
                hlapi.ContextData(),
                *self.construct_value_pairs(values)
            )
            return self.fetch(handler, 1)[0]

    def constructObject(self, oids):
        arr = []
        for oid in oids:
            arr.append(hlapi.ObjectType(hlapi.ObjectIdentity(oid)))
        return arr

    def cast(self, value):
        try:
            return int(value)
        except (ValueError, TypeError):
            try:
                return float(value)
            except (ValueError, TypeError):
                try:
                    return str(value)
                except (ValueError, TypeError):
                    pass
        return value

    def fetch(self, handler, count):
        result = []
        for i in range(count):
            try:
                error_indication, error_status, var_binds = next(handler)
                if not error_indication and not error_status:
                    items = {}
                    for var_bind in var_binds:
                        items[str(var_bind[0])] = cast(var_bind[1])
                    result.append(items)
                else:
                    raise RuntimeError('Got SNMP error: {0}'.format(error_indication))
            except StopIteration:
                break
        return result

    def get_bulk_auto(target, oids, usr, aKey, pKey, count_oid, start_from=0):
        count = self.get(target, [count_oid], usr, aKey, pKey)[count_oid]
        return self.getBulk(target, oids, usr, aKey, pKey, count, start_from)

    def get_paquetes_entrada(target,usr,aKey,pKey):
        aux = get_bulk_auto(target,['1.3.6.1.2.1.2.2.1.2','1.3.6.1.2.1.2.2.1.11'],usr,aKey,pKey,'1.3.6.1.2.1.2.1.0')
        Interfaces=dict()
        for dato in aux:
            val=list(dato.values())
            if val[0]!='Null':
                Interfaces[val[0]]=val[1]
        return Interfaces      

    def get_paquetes_salida(direccionIp, usr, aKey, pKey):
        aux = get_bulk_auto(direccionIp,['1.3.6.1.2.1.2.2.1.2','1.3.6.1.2.1.2.2.1.17'],usr,aKey,pKey,'1.3.6.1.2.1.2.1.0')
        Interfaces=dict()
        for dato in aux:
            val=list(dato.values())
            if val[0]!='Null':
                Interfaces[val[0]]=val[1]
        return Interfaces                         

    def get_paquetes_daniados(direccionIp, usr, aKey, pKey):    
        aux = get_bulk_auto(direccionIp,['1.3.6.1.2.1.2.2.1.2','1.3.6.1.2.1.2.2.1.14'],usr,aKey,pKey,'1.3.6.1.2.1.2.1.0') 
        Interfaces=dict()
        for dato in aux:
            val=list(dato.values())
            if val[0]!='Null':
                Interfaces[val[0]]=val[1]
        return Interfaces  

oids = ['1.3.6.1.2.1.1.4.0', '1.3.6.1.2.1.1.1.0', '1.3.6.1.2.1.1.5.0', '1.3.6.1.2.1.1.6.0']
target = 'google.com'
usuario = 'usr' 
authKey = '12345678'
privKey = '12345678'
values = {}