// import React from 'react'
import { connect } from 'react-redux'
import type { State, Dispatch } from '../flow-types'
import EmployeeLayout from '../components/employees'
import { fetchEmployees } from '../store/employee/employeeActions'
import {
  getEmployees,
  getLoading,
  getError
} from '../store/employee/employeesSelectors'

export const mapStateToProps = (state: State) => {
  return {
    employees: getEmployees(state),
    isLoading: getLoading(state),
    hasError: getError(state)
  }
}

// setup the functions that we want to pass down to the components
export const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchEmployees: () => dispatch(fetchEmployees()),
  handleViewEmployee: (id: string) => ({}),
  handleEditEmployee: (id: string) => ({})
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLayout)
