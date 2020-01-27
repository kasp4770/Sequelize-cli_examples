'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    cvrNo: DataTypes.INTEGER
  }, {});
  Company.associate = function(models) {
    Company.hasMany(models.Employee, {foreignKey: 'companyId'})
  };
  return Company;
};