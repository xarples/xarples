import { Server } from 'http'
import logger from './logger'

interface IOptions {
  coredump: boolean
  timeout: number
}

export default function terminate(
  server: Server,
  options: IOptions = { coredump: false, timeout: 500 }
) {
  const exit = () => (options.coredump ? process.abort() : process.exit())

  return (code: number, reason: string) => (
    err?: any,
    promise?: Promise<any>
  ) => {
    logger.info(`Process exiting with code: ${code} and reason: ${reason}`)

    if (err instanceof Error) {
      logger.error(err.message)
      logger.debug({ msg: err.stack })
      logger.debug({ msg: promise })
    }

    server.close(exit)
    setTimeout(exit, options.timeout).unref()
  }
}
