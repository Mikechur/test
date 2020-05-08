
drop table if exists CAR;
drop table if exists AIRPLANE;
drop table if exists ASSESSMENT;

create table CAR (
  id IDENTITY primary key,
  brand VARCHAR2(150),
  model VARCHAR2(200),
  power DOUBLE,
  year_of_issue YEAR
);

create table AIRPLANE (
  id IDENTITY primary key,
  brand VARCHAR2(150),
  model VARCHAR2(200),
  manufacturer VARCHAR2(500),
  year_of_issue YEAR,
  fuel_capacity INT,
  seats INT
);

create table ASSESSMENT (
  id IDENTITY primary key,
  assessed_value DEC(20),
  type VARCHAR2(150),
  coll_id BIGINT,
  date DATE
);