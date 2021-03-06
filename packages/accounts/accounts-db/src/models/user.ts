import { DataTypes, Model } from 'sequelize'
import utils from '@xarples/utils'

import sequelize from '../lib/sequelize'

class User extends Model {
  id!: string
  username!: string
  password!: string
  email!: string
  firstName!: string
  lastName!: string
  gender: string | undefined
  picture: string | undefined
  phoneNumber: string | undefined
  birthDate: Date | undefined
  readonly createdAt!: Date
  readonly updatedAt!: Date
}

User.init(
  {
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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
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
    birthDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    tableName: 'users',
    underscored: true,
    hooks: {
      beforeCreate(user) {
        user.password = utils.encrypt(user.password)
      }
    }
  }
)

export default User
