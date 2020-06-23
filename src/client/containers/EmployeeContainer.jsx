import React from 'react'
import { connect } from 'react-redux'
import type { State, Dispatch } from '../flow-types'
import EmployeeLayout from '../components/employees'
import {
  fetchEmployees,
  handleDeleteEmployee
} from '../store/employee/employeeActions'
import { openPopup } from 'react-redux-popup'
import {
  getEmployees,
  getEmployeeSalary,
  getLoading,
  getError,
  getemployeesLastEditedAt
} from '../store/employee/employeesSelectors'
import EmployeeDetailsContainer from '../components/employees.employee/EmployeeDetailsContainer'
import { Typography } from '@material-ui/core'

export const mapStateToProps = (state: State) => {
  return {
    employees: getEmployees(state),
    employeeSalary: getEmployeeSalary(state),
    isLoading: getLoading(state),
    hasError: getError(state),
    employeesLastEditedAt: getemployeesLastEditedAt(state)
  }
}

// setup the functions that we want to pass down to the components
export const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchEmployees: () => dispatch(fetchEmployees()),
  handleDeleteEmployee: (data: string) => dispatch(handleDeleteEmployee(data)),
  handleViewEmployee: (id: string) => {
    dispatch(
      openPopup({
        title: <Typography variant='h5'>Employee Details</Typography>,
        hideFooter: true,
        content: <EmployeeDetailsContainer employeeId={id} />
      })
    )
  },
  handleCreateEmployee: () => {
    dispatch(
      openPopup({
        title: <Typography variant='h5'>Create Employee Details</Typography>,
        hideFooter: true,
        content: <EmployeeDetailsContainer isCreateNew />
      })
    )
  },
  handleEditEmployee: (id: string) => {
    dispatch(
      openPopup({
        title: <Typography variant='h5'>Edit Employee Details</Typography>,
        hideFooter: true,
        content: <EmployeeDetailsContainer employeeId={id} isEditable />
      })
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLayout)
