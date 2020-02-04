import pino from 'pino'

const logger = pino({
  level:
    process.env.DEBUG || process.env.NODE_ENV === 'debug' ? 'debug' : 'info',
  prettyPrint: {
    colorize: true,
    ignore: 'pid,hostname,time'
  }
})

export default logger
