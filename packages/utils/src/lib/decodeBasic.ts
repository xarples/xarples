export default function decodeBasic(encoded: string) {
  if (!encoded.includes('Basic')) {
    return null
  }

  const base64Credentials = encoded.split(' ')[1]
  const decoded = Buffer.from(base64Credentials, 'base64').toString('ascii')
  const [username, password] = decoded.split(':')

  return {
    username,
    password
  }
}
