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

CREATE Table Usuario(
  ID SERIAL UNIQUE,
  Username varchar(30) UNIQUE,
  Password varchar(150) NOT NULL,
  Fk_Rol int NOT NULL,
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
  
Create Table Departamento(
  COD SERIAL UNIQUE,
  Nombre varchar(150) NOT NULL,
  Descripcin varchar(150),
  Area_D int NOT NULL,
  Fk_Sucursal int NOT NULL,
  Constraint Pk_Departamento PRIMARY KEY (COD),
  FOREIGN KEY (Fk_Sucursal) REFERENCES Sucursal (COD)
  );

CREATE Table Empleado(
  ID SERIAL UNIQUE,
  P_Nombre varchar(150) NOT NULL,
  S_Nombre varchar(150),
  P_Apellido varchar(150) NOT NULL,
  S_Apellido varchar(150),
  Cedula int NOT NULL UNIQUE,
  Email_P varchar(150) UNIQUE,
  Email_E varchar(150) NOT NULL UNIQUE,
  Fecha_N Date NOT NULL,
  Nivel_Acd varchar(150) NOT NULL,
  Edo_C char(1) NOT NULL
  Profecion varchar(150) NOT NULL,
  Num_H int NOT NULL,
  Fk_Lugar int NOT NULL,
  Fk_Emp int,
  Fk_User int NOT NULL UNIQUE,
  Constraint Pk_Empleado PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Lugar) REFERENCES Lugar (ID),
  FOREIGN KEY (Fk_Emp) REFERENCES Empleado (ID),
  FOREIGN KEY (Fk_User) REFERENCES Usuario (ID)
  );
  
CREATE Table Emp_Suc(
  ID SERIAL UNIQUE,
  Fk_Suc int NOT NULL,
  Fk_Emp int NOT NULL,
  Constraint Pk_Emp_Suc PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Suc) REFERENCES Sucursal (COD),
  FOREIGN KEY (Fk_Emp) REFERENCES Empleado (ID)
  );
  
CREATE Table Emp_Dep(
  ID SERIAL UNIQUE,
  Fecha date NOT NULL,
  Fk_Dep int NOT NULL
  Fk_Emp int NOT NULL
  Constraint Pk_Emp_Dep PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Dep) REFERENCES Departamento (COD),
  FOREIGN KEY (Fk_Emp) REFERENCES Empleado (ID)
  };

CREATE Table Horario(
  ID SERIAL UNIQUE,
  Constraint Pk_Horario PRIMARY KEY (ID),
  );
  
CREATE Table Emp_Hor(
  ID SERIAL UNIQUE,
  Constraint Pk_Emp_Hor PRIMARY KEY (ID),
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
  Nombre varchar(100) NOT NULL,
  Apellido varchar(100) NOT NULL
  Fecha_N Date Not NULL,
  Edo_C char(1) NOT NULL,
  Nombre_E varchar(100),
  L_VIP int NOT NULL,
  Fk_Lugar int NOT NULL,
  Fk_User int NOT NULL UNIQUE,
  Fk_Carnet int UNIQUE,
  Constraint Pk_Cliente PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Lugar) REFERENCES Lugar (ID),
  FOREIGN KEY (Fk_User) REFERENCES Usuario (ID),
  FOREIGN KEY (Fk_Carnet) REFERENCES Carnet (ID)
  );

CREATE Table Marca(
  ID SERIAL UNIQUE,
  Nombre varchar(100) NOT NULL,
  Constraint Pk_Marca PRIMARY KEY (ID),
  );
  
CREATE Table Modelo(
  ID SERIAL UNIQUE,
  Nombre varchar(100) NOT NULL,
  Fk_Marca int NOT NULL,
  Constraint Pk_Modelo PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Marca) REFERENCES Carnet (ID)
  );

CREATE Table Vehiculo(
  ID SERIAL UNIQUE,
  Placa varchar(10) NOT NULL UNIQUE,
  Peso int NOT NULL,
  Cap_C int NOT NULL,
  Descripcion varchar(150),
  Color varchar(10) NOT NULL,
  Fecha_V date NOT NULL,
  Serial_M varchar(30) NOT NULL,
  Serial_C varchar(30) NOT NULL,
  Fk_Mod int NOT NULL,
  Constraint Pk_Vehiculo PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Mod) REFERENCES Marca (ID)
  );  
  
CREATE Table Avion(
  ID SERIAL UNIQUE,
  Nombre
  Peso int NOT NULL,
  Cap_C int NOT NULL,
  Descripcion varchar(150),
  Long int NOT NULL,
  Env int NOT NULL,
  Alt int NOT NULL,
  Ancho_C int NOT NULL,
  Diametro int NOT NULL,
  Peso_MaxD int NOT NULL,
  Carrera_D int NOT NULL,
  Vmax int NOT NULL,
  Fuel_C int NOT NULL,
  Motor varchar(150) NOT NULL,
  Area int NOT NULL
  );
  
CREATE Table Barco(
  );
  


