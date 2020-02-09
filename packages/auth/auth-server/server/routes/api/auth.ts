import { Router } from 'express'
import passport from 'passport'
import config from '@xarples/config'

const router = Router()

router.post('/login', passport.authenticate('local'), (req, res) => {
  req!.session!.user = req.user

  res.redirect(
    `http://${config.console.service.host}:${config.console.service.host}`
  )
})

export default router
