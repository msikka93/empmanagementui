// TODO: ideally, beaver should be imported; but seems like
// as of 1-oct-2018, it does not support import
// https://github.com/krakenjs/beaver-logger/issues/18
import { BEAVER_LOGGER } from '../../../config/client-config'
const beaverLogger = require('beaver-logger')

/**
 *  setupLogger
 *  logger logs messages to the browser console and
 *  periodically flushes the logs to the server
 */
export default function setupLogger () {
  const $logger = (global.$logger = beaverLogger.Logger({
    url: '/api/log',
    // logLevel: beaverLogger.LOG_LEVEL.INFO,
    logLevel: BEAVER_LOGGER.LOG_LEVEL, // Log level to display in the browser console
    flushInterval: BEAVER_LOGGER.FLUSH_INTERVAL
  }))

  $logger.addPayloadBuilder(function () {
    return {
      correlationId: null,
      basketId: null
    }
  })

  //   $logger.addMetaBuilder(() => {
  //     return {
  //       current_page: 'customer_page'
  //     }
  //   })

  // $logger.addHeaderBuilder(() => {
  //   return {
  //   }
  // })
}
