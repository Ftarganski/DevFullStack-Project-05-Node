const Sequelize = require('sequelize');
require("dotenv").config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  //informar os dados para o sequelize
  dialect: "mysql", //tipo de banco que vamos utilizar
  host: dbHost, //o host (no caso com um banco local)
});


module.exports = sequelize;