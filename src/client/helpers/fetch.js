import 'isomorphic-fetch'
import { v4 as uuidv4 } from 'uuid'

function checkStatus (response) {
  return response
}

function parseJSON (response) {
  return response
    .json()
    .then(json => {
      response.responseJSON = json
      return response
    })
    .catch(() => {
      // there was some problem in parsing body
      // return response with empty response so that calling
      // function can handle response by status
      response.responseJSON = {}
      return response
    })
}

export default function enhancedFetch (url, options = {}) {
  options.headers = Object.assign(
    {},
    {
      pragma: 'no-cache',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
      'X-Correlation-ID': uuidv4()
    },
    options.headers
  )

  options.credentials = 'same-origin'

  if (typeof options.body !== 'string') {
    options.body = JSON.stringify(options.body)
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(response => {
      if (response.status >= 400) throw response // todo: jp(3/2/2018) throw custom expection here instead of response
      return response
    })
}
