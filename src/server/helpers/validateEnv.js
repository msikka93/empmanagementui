import { logger } from './logger'
export default function validateEnv () {
  // Ensure required ENV vars are set
  const requiredEnv = [
    'DRP_CF_HTTP_PORT',
    'DRP_CF_STAGE',
    'EMP_MANAGEMENT_SERVER_LOG_LEVEL'
  ]

  const unsetEnv = requiredEnv.filter(
    env => !(typeof process.env[env] !== 'undefined')
  )

  if (unsetEnv.length > 0) {
    logger.error(
      'Required ENV variables are not set: [' + unsetEnv.join(', ') + ']'
    )
    throw new Error(
      'Required ENV variables are not set: [' + unsetEnv.join(', ') + ']'
    )
  }
}
