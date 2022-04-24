"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          title: "Mistei Danau Nibung",
          user: 1,
          category: 1,
          author: "Bumi Sakti",
          image: "/upload/image 1.png",
          published: new Date(),
          price: 90000,
          stock: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rusa Tanduk Emas",
          user: 1,
          category: 2,
          author: "Rantau Batuah",
          image: "/upload/image 2.png",
          published: new Date(),
          price: 50000,
          stock: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tawuran 2014",
          user: 1,
          category: 3,
          author: "Rantau Batuah",
          image: "/upload/image 3.png",
          published: new Date(),
          price: 60000,
          stock: 300,
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
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
