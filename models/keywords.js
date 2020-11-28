const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Keywords extends Model {}

Keywords.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'keywords',
  }
);

module.exports = Keywords;
