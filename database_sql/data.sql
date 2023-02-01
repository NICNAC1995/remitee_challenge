-- TABLA DE PRODUCTOS
INSERT INTO products (id, name, price) VALUES
(DEFAULT, 'mate', 2500), (DEFAULT, 'lapicera', 200), (DEFAULT, 'lapiz', 100), (DEFAULT, 'goma de borrar', 150);

-- TABLA DE CLIENTES
INSERT INTO clients (id, name, email) VALUES 
(DEFAULT, 'Juan', 'juan@gmail.com'), (DEFAULT, 'Pedro', 'pedro@gmail.com'), (DEFAULT, 'Eduardo', 'eduardo@gmail.com'), (DEFAULT, 'Lautaro', 'lautaro@gmail.com');

-- TABLA DE TRANSACCIONES
INSERT INTO transactions (id, date, client_id, product_id, quantity) VALUES 
(DEFAULT, NOW(), 1, 2, 3), (DEFAULT, NOW(), 2, 2, 4), (DEFAULT, NOW(), 2, 3, 1), (DEFAULT, NOW(), 4, 1, 3);

-- TABLA DE PAGOS
INSERT INTO payments (id, date, transaction_id, amount) VALUES
(DEFAULT, NOW(), 1, 600), (DEFAULT, NOW(), 2, 800), (DEFAULT, NOW(), 3, 100), (DEFAULT, NOW(), 4, 7500);
