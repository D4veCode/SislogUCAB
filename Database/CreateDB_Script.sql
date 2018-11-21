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
  Constraint Pk_Rol PRIMARY KEY(ID)
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
  Email varchar(150) NOT NULL,
  Cap_M2 int NOT NULL,
  Cap_Alm int NOT NULL,
  Tamaño_D int NOT NULL,
  Fk_Lugar int NOT NULL,
  Constraint Pk_Sucursal PRIMARY KEY (COD),
  FOREIGN KEY (Fk_Lugar) REFERENCES Lugar (ID)
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
  Edo_C char(1) NOT NULL,
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
  Fk_Dep int NOT NULL,
  Fk_Emp int NOT NULL,
  Constraint Pk_Emp_Dep PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Dep) REFERENCES Departamento (COD),
  FOREIGN KEY (Fk_Emp) REFERENCES Empleado (ID)
  );

CREATE Table Dia(
  ID int NOT NULL,
  Nombre varchar(10) NOT NULL,
  Constraint Pk_Dia PRIMARY KEY (ID)
  );
	
CREATE Table Hora(
  ID SERIAL UNIQUE,
  Hora_E time NOT NULL,
  Hora_S time NOT NULL,
  Constraint Pk_Hora PRIMARY KEY (ID)
  );
  
CREATE Table Horario(
  ID SERIAL UNIQUE,
  Fk_Dia int NOT NULL,
  Fk_Hor int NOT NULL,
  Fk_Emp int NOT NULL,
  FOREIGN KEY (Fk_Dia) REFERENCES Dia (ID),
  FOREIGN KEY (Fk_Hor) REFERENCES Horario (ID),
  FOREIGN KEY (Fk_Emp) REFERENCES Empleado (ID),
  Constraint Pk_Horario PRIMARY KEY (ID)
  );
  
CREATE Table Cliente(
  ID SERIAL UNIQUE,
  Nombre varchar(100) NOT NULL,
  Apellido varchar(100) NOT NULL,
  Fecha_N Date Not NULL,
  Edo_C char(1) NOT NULL,
  Nombre_E varchar(100),
  L_VIP int NOT NULL,
  Fk_Lugar int NOT NULL,
  Fk_User int NOT NULL UNIQUE,
  Constraint Pk_Cliente PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Lugar) REFERENCES Lugar (ID),
  FOREIGN KEY (Fk_User) REFERENCES Usuario (ID)
  );

CREATE Table Marca(
  ID SERIAL UNIQUE,
  Nombre varchar(100) NOT NULL,
  Constraint Pk_Marca PRIMARY KEY (ID)
  );
  
CREATE Table Modelo(
  ID SERIAL UNIQUE,
  Nombre varchar(100) NOT NULL,
  Fk_Marca int NOT NULL,
  Constraint Pk_Modelo PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Marca) REFERENCES Marca (ID)
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
  FOREIGN KEY (Fk_Mod) REFERENCES Modelo (ID)
  );  
  
CREATE Table Avion(
  ID SERIAL UNIQUE,
  Nombre varchar(50) NOT NULL,
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
  ID SERIAL UNIQUE,
  Nombre varchar(30) NOT NULL,
  Descripcion varchar(150),
  Peso int NOT NULL,
  Cap_C int NOT NULL,
  Vmax int NOT NULL,
  Long int NOT NULL,
  Constraint Pk_Barco PRIMARY KEY (ID)
  );
  
CREATE Table Aeropuerto(
  ID SERIAL UNIQUE,
  Nombre varchar(100) NOT NULL,
  Cant_T int NOT NULL,
  Cant_P int NOT NULL,
  Cap int NOT NULL,
  Fk_Lugar int NOT NULL,
  Fk_Sucursal int NOT NULL,
  Constraint Pk_Aeropuerto PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Lugar) REFERENCES Lugar (ID),
  FOREIGN KEY (Fk_Sucursal) REFERENCES Sucursal (COD)
  );
  
CREATE Table Puerto(
  ID SERIAL UNIQUE,
  Nombre varchar(100) NOT NULL,
  Cant_P int NOT NULL,
  Areas_T int NOT NULL, 
  Areas_A int NOT NULL,
  Cant_M int NOT NULL,
  Long int NOT NULL,
  Ancho int NOT NULL,
  Calado int NOT NULL,
  Uso int NOT NULL,
  Fk_Lugar int NOT NULL,
  Fk_Sucursal int NOT NULL,
  Constraint Pk_puerto PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Lugar) REFERENCES Lugar (ID),
  FOREIGN KEY (Fk_Sucursal) REFERENCES Sucursal (COD)
  );
  
CREATE Table Taller(
  ID SERIAL UNIQUE,
  Nombre varchar(50) NOT NULL,
  Pg_Web varchar(150) UNIQUE,
  Email varchar(50) NOT NULL,
  Fk_Lugar int NOT NULL,
  Constraint Pk_Taller PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Lugar) REFERENCES Lugar (ID)
  );
  
CREATE Table Falla(
  ID SERIAL UNIQUE,
  Nombre varchar(50) NOT NULL,
  Constraint Pk_Falla PRIMARY KEY (ID)
  );

CREATE Table Veh_Fal(
  ID SERIAL UNIQUE,
  Fecha date NOT NULL,
  Fk_Vehiculo int NOT NULL,
  Fk_Falla int NOT NULL,
  Constraint Pk_VF PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Vehiculo) REFERENCES Vehiculo (ID),
  FOREIGN KEY (Fk_Falla) REFERENCES Falla (ID)
  );
  
CREATE Table Reparacion(
  ID SERIAL UNIQUE,
  Fecha_E date NOT NULL,
  Fecha_S date NOT NULL,
  Fecha_Rs date,
  Prox_Rev date,
  Monto int NOT NULL,
  Fk_Taller int NOT NULL,
  Fk_VF int NOT NULL,
  Constraint Pk_Reparacion PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Taller) REFERENCES Taller (ID),
  FOREIGN KEY (Fk_VF) REFERENCES Veh_Fal (ID)
  );
  
CREATE Table Contacto(
  ID SERIAL UNIQUE,
  Nombre varchar(30) NOT NULL,
  Apellido varchar(30) NOT NULL,
  Cedula int UNIQUE,
  Fk_Taller int NOT NULL,
  Constraint Pk_Contacto PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Taller) REFERENCES Taller (ID)
  );
  
CREATE Table Telefono(
  ID SERIAL UNIQUE,
  Cod_Op varchar(4) NOT NULL,
  Num varchar(7) NOT NULL,
  Fk_Emp int,
  Fk_Sucursal int,
  Fk_Contacto int,
  Constraint Pk_Telefono PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Emp) REFERENCES Empleado (ID),
  FOREIGN KEY (Fk_Sucursal) REFERENCES Sucursal (COD),
  FOREIGN KEY (Fk_Contacto) REFERENCES Contacto (ID)
  );
  
CREATE Table Suc_Met(
  ID SERIAL UNIQUE,
  Fk_Sucursal int NOT NULL,
  Fk_Vehiculo int,
  Fk_Avion int,
  Fk_Barco int,
  Constraint Pk_Suc_Met PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Sucursal) REFERENCES Sucursal (COD),
  FOREIGN KEY (Fk_Vehiculo) REFERENCES Vehiculo (ID),
  FOREIGN KEY (Fk_Avion) REFERENCES Avion (ID),
  FOREIGN KEY (Fk_Barco) REFERENCES Barco (ID)
  );
  
CREATE Table Gasto(
  ID SERIAL UNIQUE,
  Tipo varchar(30) NOT NULL UNIQUE,
  Constraint Pk_Gasto PRIMARY KEY (ID)
  );
  
CREATE Table Gas_Suc(
  ID SERIAL UNIQUE,
  Fk_Gasto int NOT NULL,
  Fk_Sucursal int NOT NULL,
  Monto int NOT NULL,
  Constraint Pk_Gas_Suc PRIMARY KEY (ID),
  FOREIGN KEY (Fk_Sucursal) REFERENCES Sucursal (COD),
  FOREIGN KEY (Fk_Gasto) REFERENCES Gasto (ID)
  );
  
Create Table Debito(
  ID SERIAL UNIQUE,
  Nombre_T varchar(50) NOT NULL,
  Numero varchar(30) NOT NULL,
  Cod_S varchar(10) NOT NULL,
  Banco varchar(50) NOT NULL,
  Constraint Pk_Debito PRIMARY KEY(ID)
  );

CREATE Table Credito(
  ID SERIAL UNIQUE,
  Nombre_T varchar(50) NOT NULL,
  Cedula_T int NOT NULL,
  Numero varchar(30) NOT NULL,
  Fecha_V date NOT NULL,
  Cod_S varchar(10) NOT NULL,
  Banco varchar(50) NOT NULL,
  Constraint Pk_Credito PRIMARY KEY(ID)
  );
  
CREATE Table Cheque(
	ID SERIAL UNIQUE,
	Numero_C varchar(50) NOT NULL,
	Fecha_D timestamp NOT NULL,
	Banco varchar(50) NOT NULL,
	Constraint Pk_Cheque PRIMARY KEY(ID)
	);
  
CREATE Table Transferencia(
  ID SERIAL UNIQUE,
  Nombre_T varchar(50) NOT NULL,
  Num_R varchar(20) NOT NULL,
  Rif varchar(30) NOT NULL,
  Banco varchar(50) NOT NULL,
  Constraint Pk_Transferencia PRIMARY KEY(ID)
  );
  
CREATE Table Tipo_Transp(
  ID SERIAL UNIQUE,
  Tipo char(20) NOT NULL,
  Constraint Pk_Tipo_Transp PRIMARY KEY(ID)
  );
  
CREATE Table Ruta(
  ID SERIAL UNIQUE,
  Fk_Origen int NOT NULL,
  Fk_Destino int NOT NULL,
  Fk_TipoT int NOT NULL,
  Tiempo int NOT NULL,
  FOREIGN KEY (Fk_Origen) REFERENCES Sucursal (COD),
  FOREIGN KEY (Fk_Destino) REFERENCES Sucursal (COD),
  FOREIGN KEY (Fk_TipoT) REFERENCES Tipo_Transp (ID),
  Constraint Pk_Ruta PRIMARY KEY(ID)
  );
  
CREATE Table Paquete(
  ID SERIAL UNIQUE,
  Num_G int NOT NULL UNIQUE,
  Peso int NOT NULL,
  Monto int,
  Tipo_P varchar(50) NOT NULL,
  Fk_Cliente int NOT NULL,
  FOREIGN KEY (Fk_Cliente) REFERENCES Cliente (ID),
  Constraint Pk_Paquete PRIMARY KEY(ID)
  );
  
CREATE Table Tracking(
  ID SERIAL UNIQUE,
  Fecha_L date NOT NULL,
  Fecha_S date,
  Fk_Ruta int,
  Fk_Paq int NOT NULL,
  Fk_Suc int NOT NULL,
  FOREIGN KEY (Fk_Ruta) REFERENCES Ruta (ID),
  FOREIGN KEY (Fk_Paq) REFERENCES Paquete (ID),
  FOREIGN KEY (Fk_Suc) REFERENCES Sucursal (COD),
  Constraint Pk_Tracking PRIMARY KEY(ID)
  );
  
CREATE Table Facturacion(
  ID SERIAL UNIQUE,
  Fecha date NOT NULL,
  Fk_Tacking int NOT NULL,
  Fk_Deb int,
  Fk_Cre int,
  Fk_Che int,
  Fk_Trans int,
  FOREIGN KEY (Fk_Deb) REFERENCES Debito (ID),
  FOREIGN KEY (Fk_Cre) REFERENCES Credito (ID),
  FOREIGN KEY (Fk_Che) REFERENCES Cheque (ID),
  FOREIGN KEY (Fk_Trans) REFERENCES Transferencia (ID),
  FOREIGN KEY (Fk_Tacking) REFERENCES Tracking (ID),
  Constraint Pk_Facturacion PRIMARY KEY(ID)
  );

CREATE Table Status(
  ID SERIAL UNIQUE,
  Descripcion varchar(100),
  Tipo varchar(50) NOT NULL UNIQUE,
  Constraint Pk_Status PRIMARY KEY(ID)
  );
  
CREATE Table Sta_Tra(
  ID SERIAL UNIQUE,
  Fecha date NOT NULL,
  Fk_Status int NOT NULL,
  Fk_Tracking int NOT NULL,
  FOREIGN KEY (Fk_Status) REFERENCES Status (ID),
  FOREIGN KEY (Fk_Tracking) REFERENCES Tracking (ID),
  Constraint Pk_Sta_Tra PRIMARY KEY(ID)
  );
