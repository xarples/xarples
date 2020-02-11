export default function encodeBasic(username: string, password: string) {
  Buffer.from(`Basic ${username}:${password}`).toString('base64')
}
