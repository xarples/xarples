import { Configuration } from '@nuxt/types'
import xarplesConfig from '@xarples/config'

const { host, port } = xarplesConfig.web.service

const config: Configuration = {
  buildModules: ['@nuxt/typescript-build'],
  css: ['~/assets/main.css'],
  modules: ['nuxt-buefy'],
  srcDir: './src',
  server: { host, port },
  typescript: {
    typeCheck: {
      eslint: process.env.NODE_ENV === 'development'
    }
  }
}

export default config
