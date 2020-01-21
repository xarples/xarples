import { Configuration } from '@nuxt/types'

const config: Configuration = {
  buildModules: ['@nuxt/typescript-build'],
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config?.module?.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default config
