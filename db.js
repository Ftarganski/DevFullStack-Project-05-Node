const Sequelize = require("sequelize");
require("dotenv").config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  //DADOS PARA O SEQUELIZE
  dialect: "mysql", //TIPO DE BANCO DE DADOS
  host: dbHost, //HOST
});

module.exports = sequelize;
