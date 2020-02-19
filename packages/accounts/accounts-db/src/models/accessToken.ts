import { DataTypes, Model } from 'sequelize'
import utils from '@xarples/utils'

import sequelize from '../lib/sequelize'

import Client from './client'
import User from './user'

class AccessToken extends Model {
  id!: string
  clientId!: string
  userId!: string
  token?: string
  scope?: string
  readonly createdAt!: Date
  readonly updatedAt!: Date
}

AccessToken.init(
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
    token: {
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
    tableName: 'access_tokens',
    underscored: true
  }
)

AccessToken.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id'
})

AccessToken.belongsTo(Client, {
  foreignKey: 'clientId',
  targetKey: 'id'
})

export default AccessToken
