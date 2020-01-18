'use strict'

import { DataTypes } from 'sequelize'

import sequelize from '../lib/sequelize'

const queryInterface = sequelize.getQueryInterface()

export default {
  up: () => {
    return queryInterface.createTable('users', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      // @ts-ignore
      roleId: {
        type: DataTypes.UUID,
        references: {
          model: {
            tableName: 'roles',
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
  down: () => {
    return queryInterface.dropTable('users')
  }
}
