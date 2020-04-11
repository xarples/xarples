import { Configuration } from '@nuxt/types'
import xarplesConfig from '@xarples/config'

const { port } = xarplesConfig.web.service

const config: Configuration = {
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@xarples/wolfi-nuxt'],
  srcDir: './src',
  server: { port },
  typescript: {
    typeCheck: {
      eslint: process.env.NODE_ENV === 'development'
    }
  }
}

export default config
