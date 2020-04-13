import { getUnixTime, add, Duration } from 'date-fns'

interface IOptions {
  entityCreatedAt: string
  expiresIn: Duration
}

export default function isExpired(options: IOptions) {
  const currentTime = getUnixTime(new Date())
  const entityCreatedAt = new Date(options.entityCreatedAt)
  const expirationTime = getUnixTime(add(entityCreatedAt, options.expiresIn))

  return currentTime > expirationTime
}
