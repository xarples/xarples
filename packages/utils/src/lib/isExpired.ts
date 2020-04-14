import * as dateFns from 'date-fns'

interface IOptions {
  entityCreatedAt: string
  expiresIn: number
}

export default function isExpired(options: IOptions) {
  const currentTime = dateFns.getUnixTime(new Date())
  const entityCreatedAt = new Date(options.entityCreatedAt)
  const expirationTime = dateFns.getUnixTime(
    dateFns.add(entityCreatedAt, { seconds: options.expiresIn })
  )

  return currentTime > expirationTime
}
