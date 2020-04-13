import crypto from 'crypto'

import base64URLEncode from './base64URLEncode'

export default function generateCodeChallenge(
  codeVerifier: string,
  codeChallengeMethod: 'plain' | 'S256'
) {
  if (codeChallengeMethod === 'plain') {
    return codeVerifier
  }

  return base64URLEncode(sha256(codeVerifier))
}

function sha256(str: string) {
  return crypto
    .createHash('sha256')
    .update(str)
    .digest()
}
