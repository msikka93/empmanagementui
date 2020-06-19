import { WINSTON } from '../../../config/server-config'
const { createLogger, format, transports } = require('winston')
const { combine } = format

const systemInfo = format((info, opts) => {
  return Object.assign(
    {},
    {
      '@vertical': 'empManagement',
      '@service-name': 'emp-management-ui',
      '@service-version': __APPVERSION__,
      '@retention': 'technical',
      '@type': 'service'
    },
    info
  )
})

// Ignore log messages if they have { private: true }
const ignorePrivate = format((info, opts) => {
  // TODO: this will current ignore server side logs too
  if (process.env.DRP_CF_STAGE === 'local' && WINSTON.IGNORE_CLIENT_LOGS) {
    return false
  }
  return info
})

// this this for more details
// https://github.com/winstonjs/winston#usage
export let logger
if (process.env.DRP_CF_STAGE === 'local') {
  logger = createLogger({
    level: WINSTON.LOG_LEVEL, // Log only if log level is less than or equal to this level
    format: combine(ignorePrivate(), format.json()),
    transports: [new transports.Console()]
  })
} else {
  logger = createLogger({
    level: WINSTON.LOG_LEVEL, // Log only if log level is less than or equal to this level
    format: combine(ignorePrivate(), systemInfo(), format.json()),
    transports: [new transports.Console()]
  })
}

/** custom logger using winston. Why? See the link.
 * https://github.com/krakenjs/beaver-logger#custom-backend-logger
 */
const beaverCustomerLogger = {
  log: function (req, level, event, payload) {
    logger.log({
      level: level,
      event: event,
      '@hostname': req.headers.host,
      '@timestamp': new Date().toISOString(),
      message: JSON.stringify(payload),
      username: req.session && req.session.user && req.session.user.username,
      correlation_id: payload.correlationId || ''
    })
  },

  /**
   * user analytics stuff
   * @param {object} req
   * @param {object} payload
   */
  track: function (req, payload) {
    logger.log({
      level: 'info',
      log_type: 'track',
      '@hostname': req.headers.host,
      '@timestamp': new Date().toISOString(),
      message: JSON.stringify(payload),
      ...payload
    })
  }
}

export default beaverCustomerLogger
