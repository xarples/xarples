import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin'
  })
)

export default router
