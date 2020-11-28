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
    keywords_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    toothless_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'toothless',
          key: 'id'
        }
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
