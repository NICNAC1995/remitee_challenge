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
    await queryInterface.bulkInsert("Products", [
      {
        name: "mate",
        price: 2500,
      },
      {
        name: "lapicera",
        price: 200,
      },
      {
        name: "lapiz",
        price: 100,
      },
      {
        name: "goma de borrar",
        price: 150,
      },
      {
        name: "airpods",
        price: 7000,
      },
      {
        name: "iphone",
        price: 8000,
      },
      {
        name: "macbook",
        price: 9500,
      },
      {
        name: "Silla",
        price: 500,
      },
      {
        name: "Sillón",
        price: 3000,
      },
      {
        name: "Libro",
        price: 700,
      },
      {
        name: "Libreta",
        price: 400,
      },
      {
        name: "Vaso",
        price: 100,
      },
      {
        name: "Billetera",
        price: 300,
      },
      {
        name: "Perfume",
        price: 800,
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
