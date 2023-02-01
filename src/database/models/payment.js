"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.Transaction, {
        as: "transaction",
        foreignKey: "transaction_id",
      });
    }
  }
  Payment.init(
    {
      transaction_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
