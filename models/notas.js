'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Notas.belongsTo(models.User, {
        foreingKey: "id_user",
        as: "user"
      });

      Notas.belongsTo(models.Materia, {
        foreignKey: "idMateria",
        as: "materia",
      });
      
    }
  };
  Notas.init({
    id_user: {
      type: DataTypes.INTEGER,
      field: "id_user",
      references: {
        model: "User",
        as: "id_user",
        key: "id",
      },
    },
    idMateria:  {
      type: DataTypes.INTEGER,
      field: "id_materia",
      references: {
        model: "Materia",
        as: "materiaId",
        key: "id",
      },
    },
    notas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Notas',
  });
  return Notas;
};