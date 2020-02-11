export default function encodeBasic(username: string, passwrod: string) {
  Buffer.from(`${username}:${passwrod}`).toString('base64')
}
