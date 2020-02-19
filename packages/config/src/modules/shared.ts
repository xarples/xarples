import { IConfigModuleShared } from '@xarples/types'

const config: IConfigModuleShared = {
  redis: {
    host: process.env.REDIS_HOST || 'localhost'
  }
}

export default config
