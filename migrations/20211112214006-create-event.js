'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      timeStart: {
        type: Sequelize.TIME
      },
      locationLat: {
        type: Sequelize.FLOAT
      },
      locationLon: {
        type: Sequelize.FLOAT
      },
      association: {
        type: Sequelize.STRING
      },
      sourcedata: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      entityId: {
        type: Sequelize.INTEGER
      },
      projectId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('events');
  }
};