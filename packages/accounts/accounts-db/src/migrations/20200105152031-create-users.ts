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
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: false
      },
      picture: {
        allowNull: false,
        type: DataTypes.STRING
      },
      birth_date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      phone_number: {
        allowNull: false,
        type: DataTypes.STRING
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    })
  },
  down: () => {
    return queryInterface.dropTable('users')
  }
}
