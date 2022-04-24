"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Misteri",
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fantasi",
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Action",
          user: 1,
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
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
