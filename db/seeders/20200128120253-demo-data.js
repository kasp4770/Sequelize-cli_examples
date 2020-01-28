'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Companies', [
      {
        name: 'Zealand - Sjællands Erhvervsakademi',
        cvrNo: '52719346'
      }
      ])
      .then( () => {
        return queryInterface.bulkInsert('Addresses', [
        {
          address: 'Ringstedgade 123',
          zipcode: '4700',
          country: 'Danmark'
        },
        {
          address: 'Rolighedsvej 321',
          zipcode: '4760',
          country: 'Danmark'
        }
        ])
      }) 
      .then( () => {
        return queryInterface.bulkInsert('Employees', [
        {
          name: 'András A.',
          addressId: 2,
          companyId: 1
        },
        {
          name: 'Lucas K.',
          addressId: 1,
          companyId: 1
        }
        ])
      })
      .then( () => {
        return queryInterface.bulkInsert('Projects', [
        {
          name: 'Hackathon',
          description: '24 timers idégenerering og fremstilling af prototype, indenfor emnet informationsteknologi'
        }
        ])
      })
      .then( () => {
        return queryInterface.bulkInsert('EmployeeProjects', [
        {
          employeeId: 1,
          projectId: 1
        },
        {
          employeeId: 2,
          projectId: 1
        }
        ])
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Companies', null, {})
      .then( () => {
        return queryInterface.bulkDelete('Addresses', null, {})
      })
      .then( () => {
        return queryInterface.bulkDelete('Employees', null, {})
      })
      .then( () => {
        return queryInterface.bulkDelete('Projects', null, {})
      })
      .then( () => {
        return queryInterface.bulkDelete('EmployeeProjects', null, {})
      })
  }
};
