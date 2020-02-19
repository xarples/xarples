import { DataTypes, Model } from 'sequelize'
import utils from '@xarples/utils'

import sequelize from '../lib/sequelize'

import Client from './client'
import User from './user'

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
    underscored: true
  }
)

AuthorizationCode.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id'
})

AuthorizationCode.belongsTo(Client, {
  foreignKey: 'clientId',
  targetKey: 'id'
})

export default AuthorizationCode
