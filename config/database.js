require('dotenv').config();

module.exports = {
    development: {
      username: process.env.DB_DEV_USERNAME,
      password: process.env.DB_DEV_PASSWORD,
      database: process.env.DB_DEV_DB,
      host: "127.0.0.1",
      dialect: "mysql", //Skal matche din db. Kan også defineres i dotenv filen. Se mere på sequelize.org.
      operatorsAliases: false
    },
    test: {
      username: "root",
      password: null,
      database: "database_test",
      host: "127.0.0.1",
      dialect: "mysql",
      operatorsAliases: false
    },
    production: {
      username: "root",
      password: null,
      database: "database_production",
      host: "127.0.0.1",
      dialect: "mysql",
      operatorsAliases: false
    }
  }