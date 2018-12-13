from pg import DB


def connect():
    db = DB(dbname='sislogucab', user='postgres', passwd='root', host='localhost', port=5432)

    return db


def getClientes():
    con = connect()

    clientes = con.query("select c.id, c.nombre, c.apellido, c.email, c.cedula, c.edo_c, c.nombre_e, c.fecha_n, "
                         "c.l_vip, u.username from cliente c, usuario u where u.id=c.fk_user").dictresult()

    con.close()

    return clientes


def agregarCliente(user, nombre, ci, apellido, email, lvip, fk_lugar, f_nacimiento, est_civil=None,
                   nombre_empresa=None):
    con = connect()

    con.query(
        "insert into Cliente(FK_User, Nombre, cedula, apellido, email, edo_c, nombre_e, l_vip, FK_Lugar, fecha_n) "
        "values ($1,$2,$3,$4,$5,$6,$7,$8, $9, $10)",
        (user, nombre, ci, apellido, email, est_civil, nombre_empresa, lvip, fk_lugar, f_nacimiento))

    con.close()


def getCliente(id):
    con = connect()

    cliente = con.query(
        "select c.id, c.nombre, c.apellido, c.cedula, c.email, c.edo_c, c.nombre_e, c.fecha_n, c.l_vip, "
        "u.username username from cliente c, usuario u where u.id=c.fk_user and c.id=$1", (id,)).dictresult()

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


def getMunicipio(fk_lugar):
    con = connect()

    municipio = con.query("select l.id, l.tipo, l.nombre, (select nombre as fk_lugar from lugar where id=l.fk_lugar) "
                          "from lugar as l "
                          "where fk_lugar = $1", (fk_lugar,)).dictresult()
    con.close()
    return municipio


def getParroquias(fk_lugar):
    con = connect()

    parr = con.query(
        "select l.id, l.tipo, l.nombre, (select nombre as fk_lugar from lugar where id=l.fk_lugar) from lugar as l "
        "where fk_lugar = $1", (fk_lugar,)).dictresult()
    con.close()
    return parr


def getSucursales():
    con = connect()

    sucs = con.query("SELECT s.cod, s.nombre, s.email, s.cap_m2, s.cap_alm, s.tamaño_d, "
                     "(select nombre as fk_lugar from lugar where id = s.fk_lugar) "
                     "FROM sucursal as s;").dictresult()

    con.close()

    return sucs


def getSucursal(id):
    con = connect()

    suc = con.query("select  s.cod, s.nombre, s.email, s.cap_m2, s.cap_alm, s.tamaño_d, "
                    "(select nombre as fk_lugar from lugar where id = s.fk_lugar) from sucursal as s where s.cod = $1",
                    (id,)).dictresult()
    con.close()

    return suc


def updateSucursal(id, nombre, cap_m2, cap_alm, email, tamano, fk_lugar):
    con = connect()

    con.query("update sucursal set nombre = $1, cap_m2 = $2, cap_alm = $3, email = $4, tamaño_d = $5, fk_lugar = $6 "
              "where cod = $7", (nombre, cap_m2, cap_alm, email, tamano, fk_lugar, id))
    con.close()


def deleteSucursal(id):
    con = connect()

    con.query("delete from sucursal where cod = $1", (id,))

    con.close()


def agregarSucursal(nombre, cap_m2, cap_alm, email, tamano, fk_lugar):
    con = connect()

    con.query("insert into sucursal(nombre, cap_m2, cap_alm, email, tamaño_d, fk_lugar) values "
              "($1, $2, $3, $4, $5, $6)", (nombre, cap_m2, cap_alm, email, tamano, fk_lugar))

    con.close()


def getUsers():
    con = connect()

    users = con.query("select u.id, u.username, (select nombre as fk_rol from rol where id=u.fk_rol) "
                      "from usuario as u").dictresult()

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


def getEmpleados():
    con = connect()

    empleados = con.query("select e.*, (select nombre as direccion from lugar where id=e.fk_lugar), "
                          "(select username as username from usuario where id=e.fk_user) from empleado e").dictresult()

    con.close()
    return empleados


def agregarEmpleado(p_nombre, s_nombre, p_apellido, s_apellido, cedula, email_e, fecha_n, nivel_acd, edo_c, profesion,
                    num_h, fk_lugar, user, fk_emp=None, email_p=None):
    con = connect()

    con.query("INSERT INTO empleado(p_nombre, s_nombre, p_apellido, s_apellido, cedula, email_e, fecha_n, nivel_acd, "
              "edo_c, profesion, num_h, fk_lugar, fk_user, fk_emp, email_p) VALUES "
              "($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)",
              (p_nombre, s_nombre, p_apellido, s_apellido, cedula, email_e, fecha_n, nivel_acd, edo_c,
               profesion, num_h, fk_lugar, user, fk_emp, email_p))
    con.close()


def getEmpleado(id):
    con = connect()

    emp = con.query("select e.*, (select nombre as direccion from lugar where id=e.fk_lugar), "
                    "(select username as username from usuario where id=e.fk_user) from empleado e where id = $1",
                    (id,)).dictresult()
    con.close()
    return emp


def updateEmpleado(id, p_nombre, s_nombre, p_apellido, s_apellido, cedula, email_e, fecha_n, nivel_acd, edo_c,
                   profesion, num_h, fk_lugar, fk_emp=None, email_p=None):
    con = connect()

    con.query("UPDATE empleado SET  p_nombre=$1, s_nombre=$2, p_apellido=$3, s_apellido=$4, cedula=$5, email_e=$6, "
              "fecha_n=$7, nivel_acd=$8, edo_c=$9, profesion=$10, num_h=$11, fk_lugar=$12, fk_emp=$13, "
              "email_p=$14 WHERE id=$15", (p_nombre, s_nombre, p_apellido, s_apellido, cedula, email_e, fecha_n,
                                            nivel_acd, edo_c, profesion, num_h, fk_lugar, fk_emp, email_p, id))
    con.close()


def deleteEmpleado(id):
    con = connect()

    con.query("DELETE FROM empleado WHERE id=$1", (id,))

    con.close()


def getRutas():
    con = connect()

    rutas = con.query("select rt.id, "
                      "(select s.nombre as suc_origen from sucursal as s, ruta as r "
                      "where rt.fk_ruta=r.id and r.fk_origen=s.cod), "
                      "(select s.nombre as suc_dest from sucursal as s, ruta as r "
                      "where rt.fk_ruta=r.id and r.fk_destino=s.cod), "
                      "(select t.tipo as tipo_trans from tipo_transp as t where rt.fk_tt=t.id), rt.tiempo "
                      "from ruta_trans as rt ").dictresult()
    con.close()
    return rutas


def agregarRuta(origen, destino, m_trans, tiempo):
    con = connect()

    ruta = con.query("INSERT INTO ruta(fk_origen, fk_destino) VALUES ($1, $2) returning id",
                     (origen, destino)).dictresult()[0].get("id")

    con.query("INSERT INTO ruta_trans(fk_tt, fk_ruta, tiempo) VALUES ($1, $2, $3)", (m_trans, ruta, tiempo))

    con.close()


def getRuta(id):
    con = connect()

    ruta = con.query("select rt.id, "
                     "(select s.nombre as suc_origen from sucursal as s, ruta as r "
                     "where rt.fk_ruta=r.id and r.fk_origen=s.cod), "
                     "(select s.nombre as suc_dest from sucursal as s, ruta as r "
                     "where rt.fk_ruta=r.id and r.fk_destino=s.cod), "
                     "(select t.tipo as tipo_trans from tipo_transp as t where rt.fk_tt=t.id), rt.tiempo "
                     "from ruta_trans as rt where rt.id=$1", (id,)).dictresult()
    con.close()
    return ruta


def updateRuta(id, origen, destino, tiempo, m_trans):
    con = connect()

    rut = con.query("update ruta set fk_origen = $1, fk_destino = $2 "
                    "where id = (select fk_ruta from ruta_trans where id=$3) returning id",
                    (origen, destino, id)).dictresult()[0].get("id")
    con.query("update ruta_trans set fk_tt=$1, fk_ruta=$2, tiempo=$3 where id=$4", (m_trans, rut, tiempo, id))

    con.close()


def deleteRuta(id):
    con = connect()

    con.query("delete from ruta_trans where id=$1", (id,))

    con.close()


def getMtransp():
    con = connect()

    m_trans = con.query("select * from tipo_transp").dictresult()

    con.close()
    return m_trans
