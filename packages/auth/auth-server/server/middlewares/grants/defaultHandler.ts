import { Request, Response } from 'express'

export default function defaultHandler(_: Request, res: Response) {
  res.status(400).send({
    error: 'unsupported_grant_type',
    error_description:
      'The authorization grant type is not supported by the authorization server.'
  })
}
