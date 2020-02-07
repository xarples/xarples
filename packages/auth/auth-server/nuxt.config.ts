import { Configuration } from '@nuxt/types'

const config: Configuration = {
  buildModules: ['@nuxt/typescript-build'],
  dev: process.env.NODE_ENV !== 'production',
  modules: ['nuxt-buefy', '@nuxtjs/axios'],
  typescript: {
    typeCheck: {
      eslint: process.env.NODE_ENV === 'development'
    }
  }
}

export default config
