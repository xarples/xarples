import { DataTypes, Model } from 'sequelize'

import sequelize from '../lib/sequelize'

class Scope extends Model {
  id!: string
  name!: string
  readonly createdAt!: Date
  readonly updatedAt!: Date
}

Scope.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'scopes',
    underscored: true
  }
)

export default Scope
