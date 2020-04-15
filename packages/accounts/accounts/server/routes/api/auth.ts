import querystring from 'query-string'
import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.post('/signin', (req, res, next) => {
  const query = JSON.parse(req.body.query)
  const _query = {
    client_id: query.client_id = undefined,
    response_type: query.response_type = undefined,
    redirect_uri: query.redirect_uri = undefined,
    code_challenge: query.code_challenge = undefined,
    state: query.state = undefined
  }

  const successRedirect = query.redirect || '/'
  const queryParams = querystring.stringify(_query)
  const middleware = passport.authenticate('local', {
    successRedirect: `${successRedirect}?${queryParams}`,
    failureRedirect: '/signin'
  })

  middleware(req, res, next)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/signin')
})

router.get('/token-info', (req, res) => {
  res.send(req.user)
})

export default router
