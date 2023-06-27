"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //tudo que estiver no up significa que está criando algo.
    //neste caso criando uma tabela planets com um id e outras informações
    //queryInterface = tipo de consulta
    await queryInterface.createTable("planets", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    //excluir a informação do up.
    await queryInterface.dropTable("planets");
  },
};
