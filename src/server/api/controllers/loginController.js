// Declare browser globals for StandardJS
/* global Req, Res, Next */
import { logger } from '../../helpers/logger'

export async function logout (req: Req, res: Res, next: Next) {
  try {
    logger.info('logout successfully')
    // https://stackoverflow.com/questions/13758207/why-is-passportjs-in-node-not-removing-session-on-logout
    req.logout()
    req.session.destroy(() => {
      return res.send()
    })
  } catch (err) {
    logger.error(`Something went wrong while logout. Error ${err}`)
    return res.status(500).send({ error: err.message })
  }
}
