'use strict'

import { DataTypes } from 'sequelize'

import sequelize from '../lib/sequelize'

const queryInterface = sequelize.getQueryInterface()

module.exports = {
  up: () => {
    return queryInterface.createTable('roles', {
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
  down: () => {
    return queryInterface.dropTable('roles')
  }
}
