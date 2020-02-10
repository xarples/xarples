import { Router } from 'express'

const router = Router()

router.post('/clients', (_, res) => {
  res.send('ok')
})

export default router
