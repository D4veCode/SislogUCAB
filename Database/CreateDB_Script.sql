Create Database SislogUCAB;

DROP schema public cascade;
CREATE schema public;


CREATE Table Lugar(
  ID int,
  Tipo varchar(3) NOT NULL,
  Nombre varchar(40) NOT NULL,
  Fk_Lugar int,
  Constraint Pk_Lugar PRIMARY KEY(ID),
  FOREIGN KEY (Fk_Lugar) REFERENCES Lugar (ID)
  );

CREATE Table Rol(
  ID SERIAL UNIQUE,
  Nombre varchar(100) NOT NULL,
  Tipo varchar(100) NOT NULL,
  Constraint Pk_Rol PRIMARY KEY(ID),
  );
  
CREATE Table Privilegio(
  ID SERIAL UNIQUE,
  Nombre varchar(100) NOT NULL,
  Tipo varchar(100) NOT NULL,
  Fk_rol int NOT NULL,
  Constraint Pk_Privilegio PRIMARY KEY(ID),
  FOREIGN KEY (Fk_rol) REFERENCES Rol (ID)
  );

CREATE Table Usua	
  ID SERIAL UNIQUE,
  Username varchar(30) UNIQUE,
  Password varchar(150) NOT NULL,
  Constraint Pk_Usuario PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Rol) REFERENCES Rol (ID)
  );
  
CREATE Table Accion(
  ID SERIAL UNIQUE,
  FK_Privilegio int NOT NULL,
  FK_User int NOT NULL,
  Constraint Pk_Accion PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Privilegio) REFERENCES Privilegio (ID),
  FOREIGN KEY (Fk_User) REFERENCES Usuario (ID)
  );
  
CREATE Table Sucursal(
  COD SERIAL UNIQUE,
  Nombre varchar(150) NOT NULL,
  Email varchar(150) NOT NULL
  Cap_M2 int NOT NULL,
  Cap_Alm int NOT NULL,
  Tamaño_D int NOT NULL,
  Fk_Lugar int NOT NULL,
  Constraint Pk_Sucursal PRIMARY KEY (COD),
  FOREIGN KEY (Fk_Lugar) REFERENCES Lugar (ID),
  );

CREATE Table Empleado(
  );

CREATE Table Carnet(
  ID SERIAL UNIQUE,
  Codigo varchar(25) NOT NULL UNIQUE,
  Fk_Sucursal int NOT NULL,
  Constraint Pk_Carnet PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Sucursal) REFERENCES Sucursal (COD),
  );
  
CREATE Table Cliente(
  ID SERIAL UNIQUE,
  Nombre 
  Apellido
  Fecha_N
  Edo_C
  Nombre_E
  L_VIP
  Fk_Lugar
  Fk_Usuario
  Fk_Carnet
  Constraint
  FOREIGN KEY
  FOREIGN KEY
  FOREIGN KEY
  );
  


