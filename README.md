## Challenge Remitee

El proyecto posee la carpeta database_sql, que contiene la respuesta a las consignas de la primera parte del desafío (queries.sql), junto con otros archivos sql para creación de las tablas y datos.

Por otro lado, está la carpeta src, que contiene las lógicas de la API responsable de interactuar con la base de datos, a través de los enpoint requeridos en la segunda parte del desafío.

## Instrucciones

# Correr los siguientes comandos en la terminal:

Para correr la aplicación:

```
npm install
npm run dev
```

Para correr las migrations en sequelize:

```
sequelize db:migrate
```

Para correr los seeders en sequelize:

```
sequelize db:seed:all
```

## Routes

## Transactions

### POST /api/transactions

#### Params

| name       | type   | description                         |
| ---------- | ------ | ----------------------------------- |
| client_id  | number | unique Id of specific client        |
| product_id | number | unique Id for specific product      |
| quantity   | number | total quantity of products selected |

##### Example body

```json
{
  "client_id": 2,
  "product_id": 4,
  "quantity": 3
}
```

## Payments

### POST /api/payments

#### Params

| name           | type   | description                       |
| -------------- | ------ | --------------------------------- |
| transaction_id | number | unique Id of specific transaction |
| amount         | number | value of selected product         |

##### Example body

```json
{
  "transaction_id": 3,
  "amount": 400
}
```
