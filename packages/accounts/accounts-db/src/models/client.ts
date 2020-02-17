import { DataTypes, Model } from 'sequelize'
import utils from '@xarples/utils'

import sequelize from '../lib/sequelize'
import User from './User'

class Client extends Model {
  id!: string
  clientId!: string
  clientSecret!: string
  redirectUri!: string
  type!: 'confidential' | 'public'
  name!: string
  description!: string
  homepageUrl?: string
  logoUrl?: string
  readonly createdAt!: Date
  readonly updatedAt!: Date
}

Client.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    clientId: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: () => utils.randomBytes(32)
    },
    clientSecret: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: () => utils.randomBytes(256)
    },
    redirectUri: {
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
    homepageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logoUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'clients',
    underscored: true
  }
)

Client.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id'
})

export default Client
