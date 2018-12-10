from pg import DB


def connect():
    db = DB(dbname='sislogucab', user='postgres', passwd='root', host='localhost', port=5432)

    return db


def getClientes():
    con = connect()

    clientes = con.query("select c.id, c.nombre, c.apellido, c.cedula, c.edo_c, c.nombre_e, c.fecha_n, c.l_vip, u.username from cliente c, usuario u where u.id=c.fk_user").dictresult()

    con.close()

    return clientes


def agregarCliente(user, nombre, ci, apellido, email, lvip, fk_lugar, f_nacimiento , est_civil=None, nombre_empresa=None):
    con = connect()

    con.query(
        "insert into Cliente(FK_User, Nombre, cedula, apellido, email, edo_c, nombre_e, l_vip, FK_Lugar, fecha_n) values ($1,$2,$3,$4,$5,$6,$7,$8, $9, $10)",
        (user, nombre, ci, apellido, email, est_civil, nombre_empresa, lvip, fk_lugar, f_nacimiento))

    con.close()


def getCliente(id):
    con = connect()

    cliente = con.query("select c.id, c.nombre, c.apellido, c.cedula, c.email, c.edo_c, c.nombre_e, c.fecha_n, c.l_vip, "
                        "u.username username from cliente c, usuario u where u.id=c.fk_user and c.id=$1", (id, )).dictresult()

    con.close()

    return cliente


def agregarUser(username, password, rol):

    con = connect()

    user = con.query("insert into usuario(username, password, fk_rol) values($1, $2, $3) returning id",
                     (username, password, rol)).dictresult()

    con.close()

    return user


def updateUser(user, username, password):
    con = connect()

    con.query("update usuario set username=$1, password=$2 where username=$3", (username, password, user))

    con.close()


def getUser(username):
    con = connect()
    user = con.query("select * from usuario where username = $1", username).dictresult()

    con.close()
    return user


def updateCliente(user, nombre, cedula, apellido, email, l_vip, fk_lugar, fecha_n, edo_c, nombre_e=None):
    con = connect()

    con.query("update cliente set nombre = $1, cedula = $2, apellido = $3, email = $4, fk_lugar = $5, l_vip = $6,"
              "fecha_n = $7, edo_c = $8, nombre_e = $9 where id = $10", (nombre, cedula, apellido, email, fk_lugar,
                                                                         l_vip, fecha_n, edo_c, nombre_e, user))

    con.close()


def deleteCliente(id, username):
    con = connect()

    con.query("delete from cliente where id=$1", (id,))
    con.query("delete from usuario where username=$1", (username,))

    con.close()


def getEstados():
    con = connect()

    estados = con.query("select * from lugar where fk_lugar is null").dictresult()

    con.close()
    return estados

def getMunicipios(fk_lugar):
    con = connect()

    municipios = con.query("select l.id, l.tipo, l.nombre, (select nombre as fk_lugar from lugar where id=l.fk_lugar) from lugar as l "
              "where fk_lugar = $1", (fk_lugar,)).dictresult()
    con.close()
    return municipios

def getParroquias(fk_lugar):
    con = connect()

    parr = con.query("select l.id, l.tipo, l.nombre, (select nombre as fk_lugar from lugar where id=l.fk_lugar) from lugar as l "
              "where fk_lugar = $1", (fk_lugar,)).dictresult()
    con.close()
    return parr

def getSucursales():
    con = connect()

    sucs = con.query("select * from sucursales").dictresult()

    con.close()

    return sucs


def getSucursal(id):
    con = connect()

    suc = con.query("select * from sucursal where cod = $1", (id,)).dictresult()
    con.close()

    return suc


def updateSucursal(id, nombre, cap_m2, cap_alm, email, tamano, fk_lugar):
    con = connect()

    con.query("update sucursal set nombre = $1, cap_m2 = $2, cap_alm = $3, email = $4, tamano_d = $5, fk_lugar = $6 "
              "where cod = $7", (nombre, cap_m2, cap_alm, email, tamano, fk_lugar, id))
    con.close()

def deleteSucursal(id):
    con = connect()

    con.query("delete from sucursal where cod = $1", (id,))

    con.close()


def agregarSucursal(nombre, cap_m2, cap_alm, email, tamano, fk_lugar):
    con = connect()

    con.query("insert into sucursal(nombre, cap_m2, cap_alm, email, tamano_d, fk_lugar) values "
              "($1, $2, $3, $4, $5, $6)", (nombre, cap_m2, cap_alm, email, tamano, fk_lugar))

    con.close()


def getUsuarios():
    con = connect()

    users = con.query("select * from usuario").dictresult()

    con.close()

    return users


def getRoles():
    con = connect()

    roles = con.query("select * from rol ").dictresult()

    con.close()
    return roles


def agregarRol(nombre, tipo):
    con = connect()

    con.query("insert into rol(nombre, tipo) values ($1, $2)", (nombre, tipo))

    con.close()

def getRol(id):
    con = connect()

    rol = con.query("select * from rol where id=$1", (id,)).dictresult()

    con.close()
    return rol


def updateRol(id, nombre, tipo):
    con = connect()

    con.query("update rol set nombre = $1, tipo = $2 where id=$3", (nombre, tipo, id))

    con.close()


def deleteRol(id):
    con = connect()

    con.query("delete from rol where id=$1", (id,))

    con.close()
