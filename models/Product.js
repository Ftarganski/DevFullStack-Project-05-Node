const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db.js");

const Product = db.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  promo_price: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  percent: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  categories: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Product;
