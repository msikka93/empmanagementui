import { combineReducers } from 'redux'
import employeesReducer from './employee/employeesReducer'
const appReducer = combineReducers({
  employees: employeesReducer
})

export default function makeRootReducer (state, action) {
  return appReducer(state, action)
}
