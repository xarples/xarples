import { Router } from 'express'
import { default as clients } from './clients'

const router = Router()

router.use('/clients', clients)

export default router
