-- CREACION DE BASE DE DATOS
DROP DATABASE IF EXISTS remitee_db;
CREATE DATABASE remitee_db;
USE remitee_db;

-- CREACION DE TABLA DE PRODUCTOS
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
    `id` int(4) unsigned NOT NULL AUTO_INCREMENT UNIQUE,
    `name` VARCHAR (30) NOT NULL,
    `price` int(4) unsigned NOT NULL, 
    PRIMARY KEY (`id`)
);

-- CREACION DE TABLA DE CLIENTES 
DROP TABLE IF EXISTS `clients`;
CREATE TABLE `clients` (
    `id` int(4) unsigned NOT NULL AUTO_INCREMENT UNIQUE,
    `name` VARCHAR (30) NOT NULL,
    `email` VARCHAR (30) NOT NULL UNIQUE,
    PRIMARY KEY (`id`)
);

-- CREACION DE TABLA DE TRANSACCIONES
DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions` (
    `id` int(4) unsigned NOT NULL AUTO_INCREMENT UNIQUE,
    `date` DATETIME NOT NULL,
    `client_id` int(4) unsigned NOT NULL,
    `product_id` int(4) unsigned NOT NULL,
    `quantity` TINYINT unsigned NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`),
    FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  
);

-- CREACION DE TABLA DE PAGOS
DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments` (
    `id` int(4) unsigned NOT NULL AUTO_INCREMENT UNIQUE,
    `date` DATETIME NOT NULL,
    `transaction_id` int(4) unsigned NOT NULL UNIQUE,
    `amount` int(4) unsigned NOT NULL ,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`)
)
