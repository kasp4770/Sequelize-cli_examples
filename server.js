const express = require('express')
const app = express()
const port = 3000
const Sequelize = require('sequelize');
const DBConfig = require('./config/database');

//Test DB forbindelse. Slettes eller redigeres i 'test' eller 'production' miljø.
const sequelize = new Sequelize(DBConfig.development.database, DBConfig.development.username, DBConfig.development.password, {
    host: DBConfig.development.host,
    dialect: DBConfig.development.dialect
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Routes
app.get('/', (req, res) => res.send('Hello World!'))

//Oprettelse af server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))