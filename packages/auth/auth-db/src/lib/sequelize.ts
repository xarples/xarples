import { Sequelize } from 'sequelize'
import config from '@xarples/config'

const sequelize = new Sequelize(config.users.db)

// Object.freeze(sequelize)

export default sequelize
