import { DataTypes, Model } from 'sequelize'
import utils from '@xarples/utils'

import sequelize from '../lib/sequelize'

import Client from './client'
import User from './User'

class RefreshToken extends Model {
  id!: string
  clientId!: string
  userId!: string
  token?: string
  scope?: string
  readonly createdAt!: Date
  readonly updatedAt!: Date
}

RefreshToken.init(
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
    tableName: 'refresh_tokens',
    underscored: true
  }
)

RefreshToken.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id'
})

RefreshToken.belongsTo(Client, {
  foreignKey: 'clientId',
  targetKey: 'id'
})

export default RefreshToken
