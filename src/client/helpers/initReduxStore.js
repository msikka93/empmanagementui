// @flow strict
import createStore from '../store/createStore'

type State = {}
/**
 * to intialize redux store server side
 * this will help in SSR
 * @param {object} intialState
 */
export default function initReduxStore (intialState: State) {
  const store = createStore()
  return store
}
