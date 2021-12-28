module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('campaigns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue:
          "https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202146/0017/unscented-wax-pillar-candles-z.jpg",
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
        type: Sequelize.DATE
      },
      owner: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false
      },
      stripeId: {
        type: Sequelize.INTEGER
      },
      donation: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
          min: 0,
          max: 10000000000,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('campaigns');
  }
};