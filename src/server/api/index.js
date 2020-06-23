import express from 'express'
import beaverCustomerLogger from '../helpers/logger'

const beaverLogger = require('beaver-logger/server')
const router = express.Router()

// api to accept front-end logs
// https://github.com/krakenjs/beaver-logger
router.use(
  beaverLogger.expressEndpoint({
    uri: '/api/log', // URI to recieve logs at
    logger: beaverCustomerLogger
  })
)

export default router
