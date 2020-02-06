import { Router } from 'express'

const router = Router()

router.get('/authorize', (req, res) => {
  console.log(req)
  res.json({})
})

export default router
