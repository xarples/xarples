import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.post(
  '/signin',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin'
  })
)

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/signin')
})

router.get('/token-info', (req, res) => {
  res.send(req.user)
})

export default router
