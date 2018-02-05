CREATE DATABASE bamazon;

USE bamazon db;

DROP TABLE products;

CREATE TABLE products (
  item_id INT NOT NULL auto_increment,

  product_name VARCHAR (200) NULL,

  department_name VARCHAR (200) NULL,

  price DECIMAL (10,2) NOT NULL DEFAULT 0,

  stock_quantity INT NULL,

);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity ) 
VALUES 
( 123, 'BRIDGE BURNER', "MISCELLENEOUS", 99.97, 2 ), 
( 231, 'TIMETRAVEL MACHINE', "GADGETS", 1.23, 1),
( 546, 'MAGIC FLUKE', "MUSIC", 1.99, 5), 
( 653, "ROCKETSHIP", "TRANSPORT", 1236.02,1),
( 555, "LUCK CHARM", "TRICKERY", 25.23, 99),
( 111, "FLYING BRRROOM", "TRANSPORT", 22.33, 3),
( 656, "WORMS", "FISHING", 0.99, 99),
( 717, "DIAMOND BLADE", "GADGETS", 33.35, 4),
( 987, "SPYWARE", "GADGETS", 99.11, 1),
( 010, "BITCOINS", "MISCELLENEOUS", 111.23, 9);



