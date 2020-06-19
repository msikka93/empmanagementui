import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from './store/createStore'
import 'typeface-lato'
import './assets/styles/app.less'
import App from './app'
import { IntlProvider } from 'react-intl'
import logger from './helpers/logger'
// initialize logger
logger()

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__APP_INITIAL_STATE__

// Allow the passed state to be garbage-collected
delete window.__APP_INITIAL_STATE__

// Create Redux store with initial state
const store = createStore(preloadedState)

hydrate(
  <IntlProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </IntlProvider>,
  document.getElementById('react-app')
)
