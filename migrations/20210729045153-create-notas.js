'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Notas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        field: "user_id",
        allowNull: false,
        references: {
          model: "Users",
          as: "id",
          key: "id",
        },
      },
      materiaId: {
        type: Sequelize.INTEGER,
        field: "materia_id",
        allowNull: false,
        references: {
          model: "Materias",
          as: "id",
          key: "id",
        },
      },
      notas: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Notas');
  }
};