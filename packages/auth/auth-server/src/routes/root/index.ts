import { Router } from 'express'

const router = Router()

router.get('/authorize', (req, res) => {
  console.log(req)
  res.send('ok')
})

export default router
