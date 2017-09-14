DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

create table products(

		item_id int auto_increment not null,
		product_name varchar(50) not null,
		department_name varchar (50) not null,
		price dec (10,4) not null,
		stock_quantity int not null,
        primary key (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
values ("apples","produce", 3.99, 10),
	   ("oranges", "produce", 2.99, 5),
	   ("pears", "produce", 5.99, 7),
       ("bananas", "produce", 6.99, 15),
       ("kiwis", "produce", 10.99, 5),
       ("passionfruit", "produce", 8.99, 2),
       ("guava", "produce", 12.99, 15),
       ("strawberries", "produce", 8.99, 13),
       ("rasberries", "produce", 22.99, 44),
       ("blueberries", "produce", 12.99, 15)


