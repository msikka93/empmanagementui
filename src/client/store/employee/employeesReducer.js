// @flow strict
/* global Action */
import * as types from './employeeActionTypes'
import type {
  EmployeesStateType,
  EmployeeType
} from '../../flow-types/employeesTypes'

export const initialState: EmployeesStateType = {
  employees: []
}

export default function reduce (
  state: EmployeesStateType = initialState,
  action: Action
) {
  switch (action.type) {
    case types.EMPLOYEES_FETCHED:
      return Object.assign({}, state, {
        isLoading: false,
        hasError: false,
        employees: action.payload
      })

    case types.EMPLOYEES_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        hasError: false,
        users: []
      })

    case types.EMPLOYEES_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        hasError: true,
        users: []
      })

    case types.EMPLOYEE_RECEIVED:
      return Object.assign({}, state, {
        employees: state.employees.map<EmployeeType>(employee => {
          if (employee.id === action.payload.id) {
            return Object.assign({}, employee, action.payload)
          }
          return employee
        })
      })

    default:
      return state
  }
}
