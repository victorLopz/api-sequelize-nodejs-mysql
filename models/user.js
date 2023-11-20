"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Notas, {
        foreignKey: "user_id",
        as: "notas",
      });
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        field: "first_name"
      },
      lastName: {
        type: DataTypes.STRING,
        field: "last_name"
      },
      age: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
    }
  );
  return User;
};
