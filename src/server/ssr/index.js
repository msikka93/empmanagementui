import express from 'express'
import isoMiddleware from '../middleware/iso'

const router = express.Router()
router.get(
  '*',
  isoMiddleware // allow user to enter credentials and login
)

export default router
