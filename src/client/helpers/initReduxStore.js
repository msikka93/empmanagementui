import createStore from '../store/createStore'
import { EMPLOYEE_RECEIVED } from '../store/employee/employeeActionTypes'
import type { Employee } from '../flow-types/employeesTypes'

type State = {
  employee: Employee
}
/**
 * to intialize redux store server side
 * this will help in SSR
 * @param {object} intialState
 */
export default function initReduxStore (intialState: State) {
  const store = createStore()
  store.dispatch({
    type: EMPLOYEE_RECEIVED,
    payload: intialState.employee
  })
  return store
}
