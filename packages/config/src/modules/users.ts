import { IConfigModule } from '@xarples/types'

let config: IConfigModule = {
  service: {
    host: process.env.USERS_SERVICE_HOST || 'https://api.xarples.com/users',
    port: +process.env.PORT! || 5000
  },
  db: {
    username: process.env.DB_USERNAME || 'xarples',
    password: process.env.DB_PASSWORD || 'xarples',
    database: process.env.DB_NAME || 'xarples_users',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: 5432
  }
}

if (process.env.NODE_ENV !== 'production') {
  config!.db!.host = process.env.DB_HOST || 'localhost'

  config.service.host = process.env.USERS_SERVICE_HOST || 'localhost'
}

if (process.env.NODE_ENV === 'test') {
  config!.db!.dialect = 'sqlite'
}

export default config
