import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.post('/login', passport.authenticate('local'), (req, res) => {
  req!.session!.user = req.user
  res.send({ success: true })
})

router.get('/tokeninfo', (req, res) => {
  res.status(200).send(req.session)
})

export default router
