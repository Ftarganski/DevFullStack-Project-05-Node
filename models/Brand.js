const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db.js");

const Brand = db.define("brand", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Brand;