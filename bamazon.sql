CREATE DATABASE IF NOT EXIST bamazon;

CREATE DATABASE bamazon;

USE bamazon db;

DROP TABLE products;

CREATE TABLE products (
  item_id INT NOT NULL PRIMARY KEY auto_increment,

  product_name VARCHAR (100) NULL,

  department_name VARCHAR (100) NULL,

  price DECIMAL (10,2) NULL,

  stock_quantity INT NULL,

  product_sales DECIMAL (10,2) NULL

);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, product_sales) 
VALUES 
( 123, 'BRIDGE BURNER', "MISCELLENEOUS", 99.97, 2, 90 ), 
( 231, 'TIMETRAVEL MACHINE', "GADGETS", 1.23, 1, 1001),
( 546, 'MAGIC FLUKE', "MUSIC", 1.99. 5, 2.02), 
( 653, "ROCKETSHIP", "TRANSPORT", 1236.02, 1 , 52653.00),
( 555, "LUCK CHARM", "TRICKERY", 25.23, 99, 111.02),
( 111, "FLYING BRRROOM", "TRANSPORT", 22.33, 3 ,23.33),
( 656, "WORMS", "FISHING", 0.99, 99, 101.99),
( 717, "DIAMOND BLADE", "GADGETS" 33.35, 4, 55.23),
( 987, "SPYWARE", "GADGETS", 99.11, 1, 33.99),
( 010, "BITCOINS", "MISCELLENEOUS" 111.23, 9 , 999.00);

CREATE TABLE deparments(
	department_id INT NOT NULL PRIMARY KEY auto_increment,
	department_name VARCHAR (100) NULL,
	expenses DECIMAL (10,4) NULL
);


DROP TABLE departments;

INSERT INTO  departments (department_name,expenses)

