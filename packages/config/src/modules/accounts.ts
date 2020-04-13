import { IConfigModule } from '@xarples/types'

const config: IConfigModule = {
  frontend: {
    host: process.env.ACCOUNTS_HOST || 'https://accounts.xarples.com',
    port: +process.env.ACCOUNTS_PORT! || 5000
  },
  api: {
    host: process.env.ACCOUNTS_API_HOST || 'https:/api.xarples.com/accounts',
    port: +process.env.ACCOUNTS_API_PORT! || 5001
  },
  service: {
    host: 'https://accounts.xarples.com',
    port: 5001
  },
  db: {
    username: process.env.DB_USERNAME || 'xarples',
    password: process.env.DB_PASSWORD || 'xarples',
    database: process.env.DB_NAME || 'xarples_accounts',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: 5432,
    seederStorage: 'sequelize',
    migrationStorageTableName: 'migrations',
    seederStorageTableName: 'seeds'
  }
}

if (process.env.NODE_ENV === 'test') {
  config!.db!.dialect = 'sqlite'
}

export default config
