// const { text } = require("body-parser");
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
