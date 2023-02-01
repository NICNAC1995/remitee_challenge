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
    await queryInterface.bulkInsert("Clients", [
      {
        name: "Juan",
        email: "juan@gmail.com",
      },
      {
        name: "Pedro",
        email: "pedro@gmail.com",
      },
      {
        name: "Eduardo",
        email: "eduardo@gmail.com",
      },
      {
        name: "Lautaro",
        email: "lautaro@gmail.com",
      },
      {
        name: "Ricardo",
        email: "ricardo@gmail.com",
      },
      {
        name: "Edgardo",
        email: "edgardo@gmail.com",
      },
      {
        name: "Antonio",
        email: "antonio@gmail.com",
      },
      {
        name: "Anibal",
        email: "anibal@gmail.com",
      },
      {
        name: "Lionel",
        email: "lionel@gmail.com",
      },
      {
        name: "Leonel",
        email: "leonel@gmail.com",
      },
      {
        name: "Sergio",
        email: "sergio@gmail.com",
      },
      {
        name: "Hernan",
        email: "hernan@gmail.com",
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
