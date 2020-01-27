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
  };
  return Employee;
};