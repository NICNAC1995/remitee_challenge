const { Router } = require("express");
const route = Router();
const {
  createTransaction,
  payTransaction,
} = require("../controllers/apiController");

//Listado y recuento de usuarios
route.post("/api/transactions", createTransaction);

//Detalle de usuario
route.post("/api/payments", payTransaction);

module.exports = route;
