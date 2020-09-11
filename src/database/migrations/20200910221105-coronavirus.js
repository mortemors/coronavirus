'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('coronavirus', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      alpha2: {
        type: Sequelize.STRING,
      },
      alpha3: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      numeric: {
        type: Sequelize.INTEGER,
      },
      latitude: {
        type: Sequelize.FLOAT,
      },
      longitude: {
        type: Sequelize.FLOAT,
      },
      country_ptbr: {
        type: Sequelize.STRING,
      },
      cases: {
        type: Sequelize.INTEGER,
      },
      confirmed: {
        type: Sequelize.INTEGER,
      },
      deaths: {
        type: Sequelize.INTEGER,
      },
      recovered: {
        type: Sequelize.INTEGER,
      },
      updated: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('coronavirus')
  }
};
