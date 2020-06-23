// In a nutshell, components are supposed to be concerned only with displaying stuff.
// The only place they are supposed to get information from is their props.
// data and event handler functions should come as props
// layout components should be stateless
// purpose is to group all other components in the page together
import React from 'react'
import EmployeesGrid from './EmployeesGrid'
import Average from './Average'
import Total from './Total'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import type { EmployeeListType } from '../../flow-types/employeesTypes'
import WithLoading from './WithLoading'
import Typography from '@material-ui/core/Typography'

type Props = {
  fetchEmployees: () => void,
  handleViewEmployee: () => void,
  handleEditEmployee: () => void,
  handleDeleteEmployee: () => void,
  handleCreateEmployee: () => void,
  employees: EmployeeListType,
  employeeSalary: EmployeeListType,
  isLoading: boolean,
  hasError: boolean,
  employeesLastEditedAt: number
}

const EmployeeGridWithLoading = WithLoading(EmployeesGrid)
export default function EmployeesLayout ({
  fetchEmployees,
  handleViewEmployee,
  handleDeleteEmployee,
  handleEditEmployee,
  handleCreateEmployee,
  employees,
  employeeSalary,
  isLoading,
  hasError,
  employeesLastEditedAt
}: Props) {
  React.useEffect(() => {
    fetchEmployees()
  }, [])
  return (
    <div style={{ margin: '4rem 0 0 0' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant='h5'>Employees</Typography>
        <div style={{ marginLeft: 'auto' }}>
          <Average employeeSalary={employeeSalary} />
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Total employeeSalary={employeeSalary} />
        </div>
        <Button
          style={{ marginLeft: 'auto' }}
          variant='contained'
          color='primary'
          onClick={handleCreateEmployee}
        >
          Create
        </Button>
      </div>
      <div style={{ marginTop: '15px' }}>
        <Divider />
      </div>
      <br />
      <EmployeeGridWithLoading
        employees={employees}
        handleViewEmployee={handleViewEmployee}
        handleEditEmployee={handleEditEmployee}
        handleDeleteEmployee={handleDeleteEmployee}
        isLoading={isLoading}
        hasError={hasError}
        employeesLastEditedAt={employeesLastEditedAt}
      />
    </div>
  )
}
