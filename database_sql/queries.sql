-- 1) Dado un cliente, calcular el monto acumulado pagado

SELECT clients.name, SUM(payments.amount) 
FROM `clients` 
LEFT JOIN `transactions` 
ON clients.id = transactions.client_id 
LEFT JOIN `payments` 
ON transactions.id = payments.transaction_id 
WHERE clients.id = 2;

-- 2) Listar el top 10 de clientes que más pagaron en el año

SELECT clients.name, SUM(payments.amount) as final_amount
FROM `clients` 
LEFT JOIN `transactions` 
ON clients.id = transactions.client_id 
LEFT JOIN `payments` 
ON transactions.id = payments.transaction_id
GROUP BY clients.name
ORDER BY final_amount DESC
LIMIT 10

-- 3) Cuál es el producto que más se vendió en toda la historia

SELECT products.name,SUM(transactions.quantity) as total_quantity
FROM `products`
LEFT JOIN `transactions` 
ON products.id = transactions.product_id
GROUP BY products.name
ORDER BY total_quantity DESC
LIMIT 1

-- 4) Cuál fue el producto del cual más unidades fueron las que se compraron en una misma transacción.

SELECT products.name as product, transactions.quantity as highest_quantity
FROM `products`
LEFT JOIN `transactions` 
ON products.id = transactions.product_id
ORDER BY highest_quantity DESC

