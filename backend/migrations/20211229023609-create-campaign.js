"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("campaigns", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      goalAmount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
          min: 0,
          max: 10000000000,
        },
      },
      currentAmount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
          min: 0,
          max: 10000000000,
        },
      },
      published: {
        type: Sequelize.BOOLEAN,
      },
      date: {
        type: Sequelize.DATE,
      },
      owner: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stripeId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      donationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("campaigns");
  },
};
