import { DataTypes, Model } from 'sequelize'
import utils from '@xarples/utils'

import sequelize from '../lib/sequelize'

import Client from './client'

class AuthorizationCode extends Model {
  id!: string
  clientId!: string
  userId!: string
  code?: string
  scope?: string
  readonly createdAt!: Date
  readonly updatedAt!: Date
}

AuthorizationCode.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    userId: {
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
    }
  },
  {
    sequelize,
    tableName: 'authorization_codes',
    schema: 'public',
    underscored: true,
    hooks: {
      afterCreate(instance) {
        setTimeout(async () => {
          await instance.destroy()
        }, 1000 * 10) // 10 seconds
      }
    }
  }
)

AuthorizationCode.belongsTo(Client, {
  foreignKey: 'clientId',
  targetKey: 'id'
})

export default AuthorizationCode
