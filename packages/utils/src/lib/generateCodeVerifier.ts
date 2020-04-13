import base64URLEncode from './base64URLEncode'
import { randomBytes } from 'crypto'

export default function generateCodeVerifier() {
  return base64URLEncode(randomBytes(32))
}
