import express from 'express'
import { createProxyMiddleware as proxy } from 'http-proxy-middleware'
import { SERVICES } from '../../../config/server-config'
const router = express.Router()

router.use(
  '/employees/*',
  proxy({
    target: SERVICES.EMPLOYEE_SERVICE,
    changeOrigin: true,
    pathRewrite: (path, req) => path.replace(/\/employees\//, '/')
  })
)

// swagger redirects
// router.get('/:servicename/swagger', swaggerRedirects())

export default router
