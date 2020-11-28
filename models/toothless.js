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
    keywords_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'keywords',
        key: 'id'
      }
    }
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
