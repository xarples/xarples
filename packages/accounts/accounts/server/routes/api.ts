import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.post('/auth/login', passport.authenticate('local'), (req, res) => {
  req!.session!.user = req.user

  res.redirect('/')
})

export default router
