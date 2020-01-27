'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    Project.belongsToMany(models.Employee, {
      through: 'EmployeeProjects',
      foreignKey: 'projectId',
      as: 'employee'
    })
  };
  return Project;
};