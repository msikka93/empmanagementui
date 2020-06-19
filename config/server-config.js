if (__CLIENT__) {
  throw new Error('Do not import `server-config.js` in client-side code :-p')
}

// https://github.com/winstonjs/winston#logging
export const WINSTON = {
  IGNORE_CLIENT_LOGS: false, // ignores client logs (only in local dev env)
  LOG_LEVEL: process.env.EMP_MANAGEMENT_SERVER_LOG_LEVEL // Log only if log level is less than or equal to this level
}

export const DB_CONNSTR = {
  EMP_MANAGEMENT_DB_CONNSTR: ''
}

export const SERVICES = {
  EMPLOYEE_SERVICE: process.env.EMPLOYEE_SERVICE_URL
}
