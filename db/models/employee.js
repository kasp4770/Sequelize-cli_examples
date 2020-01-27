'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    addressId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER
  }, {});
  Employee.associate = function(models) {
    Employee.belongsTo(models.Address, {foreignKey: 'addressId'})
    Employee.belongsTo(models.Company, {foreignKey: 'companyId'})
    Employee.belongsToMany(models.Project, {
      through: 'EmployeeProjects', 
      foreignKey: 'employeeId',
      as: 'project'
    })
  };
  return Employee;
};