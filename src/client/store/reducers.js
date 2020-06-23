import { combineReducers } from 'redux'
import employeesReducer from './employee/employeesReducer'
import { popupReducer } from 'react-redux-popup'
import { snackbarReducer as alertReducer } from 'react-redux-snackbar'
const appReducer = combineReducers({
  popup: popupReducer,
  employees: employeesReducer,
  Alert: alertReducer
})

export default function makeRootReducer (state, action) {
  return appReducer(state, action)
}
