// server.js
// where magic happens :-)

import cookieParser from 'cookie-parser'
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import validateEnv from './src/server/helpers/validateEnv'
import healthCheck from './src/server/healthCheck'
import ssr from './src/server/ssr'
import api from './src/server/api'
import { logger } from './src/server/helpers/logger'
import proxy from './src/server/proxy'

// check that all required env vars are present
validateEnv()

const app = express()

// Gzip compressing can greatly decrease the size of
// the response body and hence increase the speed of a web app.
app.use(compression())

// Helmet can help protect your app from
// some well-known web vulnerabilities by setting HTTP headers appropriately.
app.use(helmet())

// serve our static stuff like index.css
// app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))
app.use('/static', express.static(path.join(__dirname, 'dist'), { fallthrough: false }))
app.use(cookieParser('secret_empManagement'))

app.use('/.well-known', healthCheck)

// setup express-session
// Express will create a new session
// (and write it to the database) whenever it does not detect a session cookie
// in the request
app.set('trust proxy', true) // trust first proxy

app.use(proxy)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(api)
app.use(ssr) // react app
// proxy requests to other services

// error handling middleware
// TODO: enhance this middleware
app.use((err, req, res, next) => {
  if (typeof (err) === 'string') {
    // custom application error
    return res.status(400).json({ message: err })
  }

  // default to 500 server error
  return res.status(500).send({ Error: err.message })
})

app.listen(process.env.DRP_CF_HTTP_PORT, () => {
  logger.info(`SERVER_STARTED : app version is ${__APPVERSION__}`)
})
