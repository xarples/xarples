import { IConfigModule } from '@xarples/types'

let config: IConfigModule = {
  service: {
    host: 'https://xarples.com',
    port: 8000
  }
}

if (process.env.NODE_ENV !== 'production') {
  config = {
    service: {
      host: 'localhost',
      port: 8000
    }
  }
}

export default config
