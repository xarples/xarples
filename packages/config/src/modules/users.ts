import { IConfigModule } from '@xarples/types'

let config: IConfigModule = {
  service: {
    host: 'https://api.xarples.com/users',
    port: 5000
  },
  db: {
    username: 'xarples_users',
    password: 'xarples_users',
    database: 'xarples_users',
    host: 'localhost',
    dialect: 'postgres'
  }
}

if (process.env.NODE_ENV !== 'production') {
  config = {
    service: {
      host: 'localhost',
      port: 5000
    },
    db: {
      username: 'xarples_users',
      password: 'xarples_users',
      database: 'xarples_users',
      host: 'localhost',
      dialect: 'postgres'
    }
  }
}

if (process.env.NODE_ENV === 'test') {
  config!.db!.dialect = 'sqlite'
}

export default config
