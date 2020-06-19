import type { State } from '../../flow-types/index'

export const getEmployees = (state: State) => state.employees.employees
export const getLoading = (state: State) => state.employees.isLoading
export const getError = (state: State) => state.employees.hasError
