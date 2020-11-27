const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Toothless extends Model {}

Toothless.init(
  {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  },
  {
    sequelize
  }
);

module.exports = Toothless;
