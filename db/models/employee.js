'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    addressId: DataTypes.INTEGER
  }, {});
  Employee.associate = function(models) {
    Employee.belongsTo(models.Address, {foreignKey: 'addressId'})
  };
  return Employee;
};