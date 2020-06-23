// Declare browser globals for StandardJS
/* global Req, Res */
// isomorphic rendering implementation

// import stuff for react server side rendering
// -----------------------------------------------------
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import App from '../../client/app'
import initReduxStore from '../../client/helpers/initReduxStore'
import template from '../helpers/template'
import { logger } from '../helpers/logger'

/**
 * this middleware is responsible for rendering app server side
 * @param {*} req
 * @param {*} res
 */
export default function iso (req: Req, res: Res) {
  const store = initReduxStore(Object.assign({}))

  const context = {}

  const appHtml = renderToString(
    <IntlProvider locale='en-GB'>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </IntlProvider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  logger.info('ssr done, sending app to user')

  res.send(
    template(appHtml, JSON.stringify(preloadedState).replace(/</g, '\\u003c'))
  )
}
