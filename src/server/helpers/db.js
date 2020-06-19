// import { DB_CONNSTR } from '../../../config/server-config'
// import { Pool } from 'pg'
// import { logger } from './logger'

// const pool = new Pool({
//   connectionString: DB_CONNSTR.EMP_MANAGEMENT_DB_CONNSTR
// })

// pool.on('connect', client => {
//   // logger.info('connected to db')
// })

// pool.on('error', (err, client) => {
//   logger.error(`Unexpected error on idle client ${JSON.stringify(err)}`)
//   process.exit(-1)
// })

// export default {
//   query: (text, params) => pool.query(text, params)
// }
