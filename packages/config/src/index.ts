import { IConfig } from '@xarples/types'

const config: IConfig = {
  users: {
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

if (process.env.NODE_ENV !== 'production') {
  config.users = {
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

export { config }

export default { config }
