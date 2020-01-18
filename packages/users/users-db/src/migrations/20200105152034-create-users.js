'use strict'

const { DataTypes } = require('sequelize')

module.exports = {
  up: (queryInterface) => {
    return queryInterface.createTable('User', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      roleId: {
        type: DataTypes.UUID,
        references: {
          model: {
            tableName: 'Role',
            schema: 'public'
          },
          key: 'id'
        },
        allowNull: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
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
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('User')
  }
}
