import React from 'react'
import DryField from '../shared/DryField'
import type { EmployeeType } from '../../flow-types/employeesTypes'
import { Typography, Divider } from '@material-ui/core'

type Props = {
  employeeDetails: EmployeeType
}

export const columns = [
  {
    id: 'id',
    name: 'ID',
    className: 'col-sm-6'
  },
  {
    id: 'employee_name',
    name: 'Employee Name',
    className: 'col-sm-6'
  },
  {
    id: 'employee_salary',
    name: 'Employee Salary',
    className: 'col-sm-6'
  },
  {
    id: 'employee_age',
    name: 'Employee Age',
    className: 'col-sm-6'
  }
]

export default function PersonalDetails ({ employeeDetails }: Props) {
  const renderDescription = item => {
    return <strong>{employeeDetails[item.id] || '---'}</strong>
  }

  const options = columns.map(item => (
    <DryField key={item.id} label={item.name} className={item.className}>
      {renderDescription(item)}
    </DryField>
  ))

  return (
    <div id='employee-personal-details'>
      <Typography color='primary' variant='h6'>
        <strong
          style={{
            color: '#002d72',
            fontSize: '16px',
            lineHeight: '22px',
            fontStyle: 'normal'
          }}
        >
          Personal Details
        </strong>
      </Typography>
      <Divider />
      <br />
      <div className='row'>{options}</div>
    </div>
  )
}
