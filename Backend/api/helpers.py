import functools
from flask import request, url_for
import bcrypt
import api.db as database


def check_password(hashed, password):

    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))


def encrypt_password(password):

    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())


def getRol(username):
    return database.getRolUser(username)[0]['nombre'] 


def getIdUsuario(username):
    
    #if(database.getRolUser(username)[0]['id'] == 2):
    return database.getIdCliente(username)[0]['id']
    #else:
    #   id = database.getIdEmp(username)[0]['id'] 
    #    return id


def getPrivilegios(username):
    return database.getPrivilegios(username)


