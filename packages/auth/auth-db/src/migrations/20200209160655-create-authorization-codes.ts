'use strict'

import { DataTypes } from 'sequelize'
import utils from '@xarples/utils'

import sequelize from '../lib/sequelize'

const queryInterface = sequelize.getQueryInterface()

export default {
  up: () => {
    return queryInterface.createTable('authorization_codes', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      // @ts-ignore
      client_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'clients',
            schema: 'public'
          },
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: () => utils.randomBytes(32)
      },
      scope: {
        type: DataTypes.STRING,
        allowNull: true
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
    return queryInterface.dropTable('authorization_codes')
  }
}
