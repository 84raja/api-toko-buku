"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.

    // Example:
    const password = bcrypt.hashSync("password", 10);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Afdiko",
          email: "afdiko@mail.test",
          password: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */

    await queryInterface.bulkDelete("Users", null, {});
  },
};
