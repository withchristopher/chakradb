const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Toothless extends Model {}

Toothless.init(
  {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
    allowNull: false
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'toothless'
  }
);

module.exports = Toothless;
