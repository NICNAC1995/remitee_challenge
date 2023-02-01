const { Router } = require("express");
const route = Router();
const {
  createTransaction,
  payTransaction,
} = require("../controllers/apiController");

//Creación de transacción
route.post("/api/transactions", createTransaction);

//Pago de transacción
route.post("/api/payments", payTransaction);

module.exports = route;
