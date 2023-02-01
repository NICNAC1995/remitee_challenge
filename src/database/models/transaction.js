"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Product, {
        as: "products",
        foreignKey: "product_id",
      });
      Transaction.belongsTo(models.Client, {
        as: "clients",
        foreignKey: "client_id",
      });
      Transaction.hasOne(models.Payment, {
        as: "payment",
        foreignKey: "transaction_id",
      });
    }
  }
  Transaction.init(
    {
      client_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
