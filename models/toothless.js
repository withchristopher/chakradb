const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Toothless extends Model {}

Toothless.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
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
