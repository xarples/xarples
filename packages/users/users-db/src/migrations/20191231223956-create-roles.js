'use strict'

const { DataTypes } = require('sequelize')

module.exports = {
  up: (queryInterface) => {
    return queryInterface.createTable('Role', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }, {})
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Role')
  }
}
