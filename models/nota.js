"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Nota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Nota.belongsTo(models.User, {
        foreingKey: "userId",
        as: "user"
      });

      Nota.belongsTo(models.Materia, {
        foreignKey: "materiaId",
        as: "materia"
      });
    }
  }
  Nota.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        references: {
          model: "User",
          key: "id"
        }
      },
      materiaId: {
        type: DataTypes.INTEGER,
        field: "materia_id",
        references: {
          model: "Materia",
          key: "id"
        }
      },
      notas: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Nota"
    }
  );
  return Nota;
};
