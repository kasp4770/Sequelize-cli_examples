'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'EmployeeProjects',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: '1999-10-10'
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: '1999-10-10'
        },
        employeeId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        projectId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EmployeeProjects');
  }
};
