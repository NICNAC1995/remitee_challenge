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
    await queryInterface.bulkInsert("Payments", [
      {
        transaction_id: 1,
        amount: 600,
        createdAt: new Date(),
      },
      {
        transaction_id: 2,
        amount: 800,
        createdAt: new Date(),
      },
      {
        transaction_id: 3,
        amount: 100,
        createdAt: new Date(),
      },
      {
        transaction_id: 4,
        amount: 7500,
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
