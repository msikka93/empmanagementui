import type { State } from '../../flow-types/index'

export const getEmployees = (state: State) => state.employees.employees
export const getLoading = (state: State) => state.employees.isLoading
export const getError = (state: State) => state.employees.hasError
export const getEmployeeByEmployeeId = (state: State, employeeId: string) =>
  state.employees.employees.find(item => item.id === employeeId)
export const getemployeesLastEditedAt = (state: State) =>
  state.employees.employeesLastEditedAt
