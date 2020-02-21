import { Configuration } from '@nuxt/types'

const config: Configuration = {
  buildModules: ['@nuxt/typescript-build'],
  build: {
    additionalExtensions: ['ts']
  },
  css: ['~/assets/main.scss'],
  dev: process.env.NODE_ENV !== 'production',
  mode: 'universal',
  modules: ['nuxt-buefy', '@nuxtjs/style-resources'],
  styleResources: {
    scss: ['~/assets/main.scss']
  },
  typescript: {
    typeCheck: {
      eslint: process.env.NODE_ENV === 'development'
    }
  }
}

export default config
