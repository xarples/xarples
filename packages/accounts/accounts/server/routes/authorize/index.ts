import express from 'express'

import consent from './consent'
import authorize from './authorize'

const router = express.Router()

router.use('/', consent, authorize)

export default router
