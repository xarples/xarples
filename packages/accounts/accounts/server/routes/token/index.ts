import express from 'express'

import authorizationCode from './authorization-code'

const router = express.Router()

router.use('/', authorizationCode)

export default router
