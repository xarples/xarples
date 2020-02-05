import { IConfigModule } from '@xarples/types'

let config: IConfigModule = {
  service: {
    host: 'https://api.xarples.com/users',
    port: 5001
  },
  db: {
    username: 'xarples_auth',
    password: 'xarples_auth',
    database: 'xarples_auth',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
  }
}

if (process.env.NODE_ENV !== 'production') {
  config = {
    service: {
      host: 'localhost',
      port: 5001
    },
    db: {
      username: 'xarples_auth',
      password: 'xarples_auth',
      database: 'xarples_auth',
      host: 'localhost',
      dialect: 'postgres',
      port: 5432
    }
  }
}

if (process.env.NODE_ENV === 'test') {
  config!.db!.dialect = 'sqlite'
}

export default config
