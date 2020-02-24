import { Request, Response, NextFunction } from 'express'

interface IOptions {
  omit: string[]
}

const defaultOptions: IOptions = {
  omit: ['/signin']
}

export default function ensureAuth(options: IOptions = defaultOptions) {
  return function(req: Request, res: Response, next: NextFunction) {
    if (options.omit.includes(req.path)) {
      return next()
    }

    if (!req.isAuthenticated()) {
      return res.redirect('/signin')
    }

    next()
  }
}
