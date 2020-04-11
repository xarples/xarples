import { Configuration } from '@nuxt/types'

const config: Configuration = {
  buildModules: ['@nuxt/typescript-build'],
  build: {
    additionalExtensions: ['ts']
  },
  dev: process.env.NODE_ENV !== 'production',
  mode: 'universal',
  modules: ['@xarples/wolfi-nuxt'],
  typescript: {
    typeCheck: {
      eslint: process.env.NODE_ENV === 'development'
    }
  }
}

export default config
