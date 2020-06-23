import React from 'react'
import type { Node } from 'react'
import TextField from '@material-ui/core/TextField'
import { Typography, Divider } from '@material-ui/core'

type Column = {
  +id: string,
  +label: string | Node,
  +className?: string,
  +maxLength?: number,
  +isDisabled?: boolean
}

export const columns: Array<Column> = [
  {
    id: 'employee_name',
    label: 'Employee Name',
    className: 'col-sm-6',
    maxLength: 15,
    isRequired: true
  },
  {
    id: 'employee_salary',
    label: 'Employee Salary',
    className: 'col-sm-6',
    isRequired: true
  },
  {
    id: 'employee_age',
    label: 'Employee Age',
    className: 'col-sm-6',
    isRequired: true
  }
]
type Props = {
  register: (a: mixed, b: mixed) => void,
  errors: Column
}
export default function CreateDetailsForm ({ register, errors }: Props) {
  const options = columns.map((item: Column) => (
    <div
      key={item.id}
      className={item.className}
      style={{ margin: '5px 0 5px 0' }}
    >
      <TextField
        error={
          (errors[item.id] && errors[item.id].type === 'required') ||
          (errors[item.id] && errors[item.id].type === 'maxLength')
        }
        label={<Typography color='default'>{item.label}</Typography>}
        helperText={
          errors[item.id] && errors[item.id].type === 'required'
            ? 'Required'
            : errors[item.id] && errors[item.id].type === 'maxLength'
              ? `Maximum ${item.maxLength} characters allowed`
              : ''
        }
        required={item.required}
        type='text'
        name={item.id}
        id={`input-user-details-${item.id}`}
        variant='outlined'
        disabled={item.isDisabled}
        inputRef={register({
          required: item.isRequired,
          maxLength: item.maxLength
        })}
      />
    </div>
  ))

  return (
    <div id='edit-personal-details-section'>
      <Typography color='primary' variant='h6'>
        <strong style={{ color: '#002d72' }}>Personal Details</strong>
      </Typography>
      <Divider />
      <br />
      <div className='row'>{options}</div>
    </div>
  )
}
