"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Transactions", [
      {
        client_id: 1,
        product_id: 2,
        quantity: 3,
        createdAt: new Date(),
      },
      {
        client_id: 2,
        product_id: 2,
        quantity: 4,
        createdAt: new Date(),
      },
      {
        client_id: 2,
        product_id: 3,
        quantity: 1,
        createdAt: new Date(),
      },
      {
        client_id: 4,
        product_id: 1,
        quantity: 3,
        createdAt: new Date(),
      },
      {
        client_id: 3,
        product_id: 6,
        quantity: 4,
        createdAt: new Date(),
      },
      {
        client_id: 5,
        product_id: 4,
        quantity: 7,
        createdAt: new Date(),
      },
      {
        client_id: 6,
        product_id: 3,
        quantity: 1,
        createdAt: new Date(),
      },
      {
        client_id: 7,
        product_id: 8,
        quantity: 2,
        createdAt: new Date(),
      },
      {
        client_id: 8,
        product_id: 2,
        quantity: 6,
        createdAt: new Date(),
      },
      {
        client_id: 9,
        product_id: 2,
        quantity: 9,
        createdAt: new Date(),
      },
      {
        client_id: 10,
        product_id: 5,
        quantity: 2,
        createdAt: new Date(),
      },
      {
        client_id: 11,
        product_id: 9,
        quantity: 7,
        createdAt: new Date(),
      },
      {
        client_id: 12,
        product_id: 3,
        quantity: 7,
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
