const db = require("../database/models");
const Transactions = db.Transaction;
const Payments = db.Payment;

module.exports = {
  createTransaction: async (req, res, next) => {
    try {
      const transaction = await Transactions.create({
        client_id: req.body.client_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity,
      });
      res.json(transaction);
    } catch (e) {
      next(e);
    }
  },
  payTransaction: async (req, res, next) => {
    try {
      const payment = await Payments.create({
        transaction_id: req.body.transaction_id,
        amount: req.body.amount,
      });
      res.json(payment);
    } catch (e) {
      next(e);
    }
  },
};
