import { DataTypes, Model } from 'sequelize'
import utils from '@xarples/utils'

import sequelize from '../lib/sequelize'

class Client extends Model {
  id!: string
  client_id!: string
  client_secret!: string
  redirect_uri!: string
  type!: 'confidential' | 'public'
  name!: string
  description!: string
  homepage_url?: string
  logo_url?: string
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
    }
  },
  {
    sequelize,
    tableName: 'clients',
    modelName: 'Client'
  }
)

export default Client
