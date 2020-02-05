import { IConfigModule } from '@xarples/types'

let config: IConfigModule = {
  service: {
    host: 'https://console.xarples.com',
    port: 8001
  }
}

if (process.env.NODE_ENV !== 'production') {
  config = {
    service: {
      host: 'localhost',
      port: 8001
    }
  }
}

export default config
