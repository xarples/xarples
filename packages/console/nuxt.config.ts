import { Configuration } from '@nuxt/types'

console.log(__dirname)

const config: Configuration = {
  buildModules: ['@nuxt/typescript-build'],
  dev: process.env.NODE_ENV !== 'production',
  modules: ['nuxt-buefy'],
  typescript: {
    typeCheck: {
      eslint: process.env.NODE_ENV === 'development'
    }
  }
}

export default config
