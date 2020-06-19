if (!__CLIENT__) {
  throw new Error('Do not import `client-config.js` in server-side code :-p')
}

// https://github.com/krakenjs/beaver-logger
// this config in future should be saved in DB
// so that it can be changed runtime
export const BEAVER_LOGGER = {
  LOG_LEVEL: 'info', // Log in browser console, if log level is less than or equal to this level
  FLUSH_INTERVAL: 1 * 60 * 1000 // m * s * ms
}
