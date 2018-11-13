from pg import DB


def connect():
    db = DB(dbname='sislogucab', user='postgres', passwd='root', host='localhost', port=5432)

    return db


def getClientes():
    con = connect()

    clientes = con.query("select * from cliente").dictresult()

    con.close()

    return clientes

def agregarCliente(user, nombre, ci, apellido, email, lvip, fk_lugar, f_nacimiento ,est_civil=None, nombre_empresa=None,  fk_carnet=None):
    con = connect()

    con.query(
        "insert into Cliente(FK_Usuario, Nombre, ci, apellido, email, estado_civil, nombre_empresa, lvip, FK_Lugar, FK_Carnet, fecha_nacimiento) values ($1,$2,$3,$4,$5,$6,$7,$8, $9, $10, $11)",
        (user, nombre, ci, apellido, email, est_civil, nombre_empresa, lvip, fk_lugar, fk_carnet, f_nacimiento,))
    con.close()