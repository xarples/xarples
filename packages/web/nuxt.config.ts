import { Configuration } from '@nuxt/types'

const config: Configuration = {
  buildModules: ['@nuxt/typescript-build'],
  srcDir: './src',
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  modules: [['nuxt-buefy', {}]],
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // eslint-disable-next-line
        ;(config?.module?.rules || []).push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default config
