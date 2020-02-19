import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.post(
  '/auth/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
)

router.get('/auth/logout', (req, res) => {
  req.logout()
  res.redirect('/login')
})

router.get('/auth/token-info', (req, res) => {
  res.send(req.user)
})

export default router
