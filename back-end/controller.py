from netmiko import ConnectHandler
class conexion_router:
    def conectar(ip, usuario, contrasena, os = 'cisco_ios'):
        net_connect = ConnectHandler(
            device_type=os,
            host=ip,
            username=usuario,
            password=contrasena,
        )
        return net_connect
 

class router_usuario:
    def nuevo_usuario(ip, usuario, contrasena, nuevo_usuario, nueva_contrasena, os='cisco_ios'):
        net_connect = conexion_router.conectar(ip, usuario, contrasena, os)
        command = "config t\nusername %s priv 15 pass %s\n"%(nuevo_usuario, nueva_contrasena)
        print(command)
        output = net_connect.send_command_timing(command)
        print(output)
        net_connect.disconnect()
    def modifica_usuario(ip, usuario, contrasena, nueva_contrasena, os='cisco_ios'):
        net_connect = conexion_router.conectar(ip, usuario, contrasena, os)
        command = "config t\nusername %s priv 15 pass 0 %s\n"%(usuario, nueva_contrasena)
        print(command)
        output = net_connect.send_command_timing(command)
        print(output)
        net_connect.disconnect()
    def elimina_usuario(ip, usuario, contrasena, nuevo_usuario, nueva_contrasena, os='cisco_ios'):
        net_connect = conexion_router.conectar(ip, usuario, contrasena, os)
        command = "config t\nno username %s priv 15 pass %s\n"%(nuevo_usuario, nueva_contrasena)
        print(command)
        output = net_connect.send_command_timing(command)
        print(output)
        net_connect.disconnect()

class configuracion_router:
    def comandos_protocolo(protocolo):
        commands = ""
        if protocolo == 'RIP' :
            f = open("command_RIP.txt", "r")
            commands=f.read()
        elif protocolo=='OSPF':
            f=open("command_OSPF.txt", "r")
            commands=r.read()
        elif protocolo=='EIGRP' :
            f = open("command_EIGRP.txt", "r")
            commands=r.read()
        return commands

    def cambiar_enrutamiento(ip, usuario, contrasena, protocolo, os='cisco_ios'):
        net_connect = conexion_router.conectar(ip, usuario, contrasena, os)
        commands = configuracion_router.comandos_protocolo(protocolo)
        print(commands)
        output = net_connect.send_command_timing(commands)
        print(output)
        net_connect.disconnect()

