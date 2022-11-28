// const { text } = require("body-parser");
const Sequelize = require("sequelize");
require("dotenv").config();

const dbName = process.env.DB_NAME || projectsequelize;
const dbUser = process.env.DB_USER || root;
const dbPassword = process.env.DB_PASSWORD || 12345678;
const dbHost = process.env.DB_HOST || localhost;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  //DADOS PARA O SEQUELIZE
  dialect: "mysql", //TIPO DE BANCO DE DADOS
  host: dbHost, //HOST
});

module.exports = sequelize;

// TEST SEQUELIZE
// const test = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// test();
