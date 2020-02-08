import { Router } from 'express'
import clients from './clients'
import auth from './auth'

const router = Router()

router.use('/clients', clients)
router.use('/auth', auth)

export default router
