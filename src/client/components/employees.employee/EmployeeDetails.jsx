import React from 'react'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import PersonalDetails from './PersonalDetails'
import type { EmployeeType } from '../../flow-types/employeesTypes'

type Props = {
  employeeDetails: EmployeeType,
  handleEdit: () => void,
  handleCancel: () => void
}

export default function EmployeeDetails ({
  employeeDetails,
  handleEdit,
  handleCancel
}: Props) {
  return (
    <>
      <PersonalDetails employeeDetails={employeeDetails} />
      <br />
      <Divider />
      <br />
      <div style={{ display: 'flex' }}>
        <Button variant='contained' onClick={handleCancel}>
          Cancel
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='contained' color='primary' onClick={handleEdit}>
          Edit
        </Button>
      </div>
    </>
  )
}
