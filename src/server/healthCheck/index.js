// healthCheck.js
// middleware to perform health check of the app

import 'isomorphic-fetch'
import express from 'express'
const router = express.Router()

// handler for the healthcheck routes
router.get('/live', (req, res, next) => {
  res.status(200).send()
})

router.get('/ready', (req, res, next) => {
  res.status(200).send()
})

router.get('/version', (req, res, next) => {
  res.send({
    version: __APPVERSION__
  })
})

export default router
