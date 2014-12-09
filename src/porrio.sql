CREATE TABLE apuesta(partido varchar(50), 
       quien_apuesta varchar(50) not null, 
       goles_local unsigned integer not null,
       goles_visitante unsigned integer not_null);

CREATE TABLE partido( id varchar(50) not null primary key desc,
       equipo_local varchar(50) not null,
       equipo_visitante varchar(50) not null, 
       competicion varchar(20)  not null,
       year unsigned integer not_null);
