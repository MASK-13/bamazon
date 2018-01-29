CREATE database bamazon;
USE bamazon db;

CREATE TABLE products (
	item_id INTERGER (11) AUTO INCREMENT NULL,
	product_name VARCHAR (100) NULL,
	department_name VARCHAR (100) NULL,
	price DECIMAL (10,2) NULL,
	stock_quantity INT NULL,
	product_sales DECIMAL (10,2) NULL,
  );