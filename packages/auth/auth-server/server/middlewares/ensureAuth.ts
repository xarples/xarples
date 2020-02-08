import { Request, Response, NextFunction } from 'express'

export default function ensureAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req?.isAuthenticated()) {
    return res.redirect('/login')
  }

  next()
}
