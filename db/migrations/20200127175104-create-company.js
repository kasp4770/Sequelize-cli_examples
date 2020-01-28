'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cvrNo: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: '1999-10-10'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: '1999-10-10'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Companies');
  }
};