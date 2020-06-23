/* global Action */
import * as types from './employeeActionTypes'
import type { EmployeesStateType } from '../../flow-types/employeesTypes'

export const initialState: EmployeesStateType = {
  employees: [],
  isLoading: false,
  hasError: false,
  employeesLastEditedAt: null
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
        employees: action.payload,
        employeesLastEditedAt: new Date().getTime()
      })

    case types.EMPLOYEES_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        hasError: false,
        employees: []
      })

    case types.EMPLOYEES_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        hasError: true,
        employees: []
      })

    case types.EMPLOYEE_RECEIVED:
      return Object.assign({}, state, {
        employees: state.employees.map(employee => {
          if (employee.id === action.payload.id) {
            return Object.assign({}, employee, action.payload)
          }
          return employee
        }),
        employeesLastEditedAt: new Date().getTime()
      })

    case types.EMPLOYEE_REMOVED:
      return Object.assign({}, state, {
        employees: state.employees.map(employee => {
          if (employee.id === action.payload.id) {
            return Object.assign({}, employee, { voided: true })
          }
          return employee
        }),
        employeesLastEditedAt: new Date().getTime()
      })
    default:
      return state
  }
}
