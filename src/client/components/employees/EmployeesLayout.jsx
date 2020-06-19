// In a nutshell, components are supposed to be concerned only with displaying stuff.
// The only place they are supposed to get information from is their props.
// data and event handler functions should come as props
// layout components should be stateless
// purpose is to group all other components in the page together
import React from 'react'
import EmployeesGrid from './EmployeesGrid'
import Divider from '@material-ui/core/Divider'
import type { EmployeeListType } from '../../flow-types/employeesTypes'
import WithLoading from './WithLoading'
import Typography from '@material-ui/core/Typography'

type Props = {
  fetchEmployees: () => void,
  handleViewEmployee: () => void,
  handleEditEmployee: () => void,
  employees: EmployeeListType,
  isLoading: boolean,
  hasError: boolean
}

const EmployeeGridWithLoading = WithLoading(EmployeesGrid)
export default function EmployeesLayout ({
  fetchEmployees,
  handleViewEmployee,
  handleEditEmployee,
  employees,
  isLoading,
  hasError
}: Props) {
  React.useEffect(() => {
    fetchEmployees()
  }, [])
  return (
    <div style={{ margin: '4rem 0 0 0' }}>
      <Typography variant='h5'>Employees</Typography>
      <Divider />
      <br />
      <EmployeeGridWithLoading
        employees={employees}
        handleViewEmployee={handleViewEmployee}
        handleEditEmployee={handleEditEmployee}
        isLoading={isLoading}
        hasError={hasError}
      />
    </div>
  )
}
