CREATE TABLE Cars (carId VARCHAR(50) UNIQUE, model VARCHAR(50) NOT NULL, bodyType VARCHAR(50) NOT NULL, brand VARCHAR(50) NOT NULL)

ALTER TABLE Cars
ADD prices DECIMAL(10)

ALTER TABLE Cars
ADD pictureUrl VARCHAR(50)

USE carOrders