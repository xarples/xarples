'use strict'

import { DataTypes } from 'sequelize'
import utils from '@xarples/utils'

import sequelize from '../lib/sequelize'

const queryInterface = sequelize.getQueryInterface()

export default {
  up: () => {
    return queryInterface.createTable('clients', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      client_id: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: () => utils.randomBytes(32)
      },
      client_secret: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: () => utils.randomBytes(256)
      },
      redirect_uri: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM('confidential', 'public'),
        allowNull: false
      },
      homepage_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      logo_url: {
        type: DataTypes.STRING,
        allowNull: false
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
    return queryInterface.dropTable('clients')
  }
}
