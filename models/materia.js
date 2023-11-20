'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Materia.hasMany(
        models.Notas,{
          foreignKey: "materiaId",
          as: "notas"
        }
      )
    }
  };
  Materia.init({
    name: DataTypes.STRING,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Materia',
    tabbleName: "Materias"
  });
  return Materia;
};