'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Employees',
      'addressId',
      { 
        type: Sequelize.INTEGER,
        references:  {
          model: 'Addresses',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    );
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Employees',
      'addressId' 
    )
  }
};
