'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    address: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    country: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    Address.hasOne(models.Employee, {foreignKey: 'addressId'})
  };
  return Address;
};