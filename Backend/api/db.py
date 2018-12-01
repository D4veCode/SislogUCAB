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