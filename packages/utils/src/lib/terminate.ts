import { Server } from 'http'

interface IOptions {
  coredump: boolean
  timeout: number
}

export default function terminate(
  server: Server,
  options: IOptions = { coredump: false, timeout: 500 }
) {
  const exit = () => (options.coredump ? process.abort() : process.exit())

  return (code: number, reason: string) => (err?: Error) => {
    console.log(`Process exiting with code: ${code} and reason: ${reason}`) // use logger module here

    if (err) {
      console.error(err.message) // use logger module here
      console.debug(err.stack) // use logger module here
    }

    server.close()
    setTimeout(exit, options.timeout).unref()
  }
}
