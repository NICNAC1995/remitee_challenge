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
