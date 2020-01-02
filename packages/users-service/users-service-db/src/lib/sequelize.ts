import { Sequelize } from 'sequelize'
import * as config from '@xarples-console/config'

let sequelize: Sequelize
export default function setupSequelize () {
  if (!sequelize) {
    sequelize = new Sequelize({
      database: config.userService.db.database,
      username: config.userService.db.username,
      password: config.userService.db.password,
      host: config.userService.db.host,
      dialect: 'postgres'
    })
  }

  return sequelize
}
