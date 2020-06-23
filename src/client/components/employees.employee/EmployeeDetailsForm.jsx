// Refs: https://react-hook-form.com/advanced-usage#ConnectForm
import React from 'react'
import Divider from '@material-ui/core/Divider'
import { useForm } from 'react-hook-form'
import PersonalDetailsForm from './PersonalDetailsForm'
import Buttons from './Buttons'
import type { EmployeeType } from '../../flow-types/employeesTypes'

type Props = {
  employeeDetails: EmployeeType,
  handleSave: (a: {}) => void,
  handleCancel: () => void
}

export default function EmployeeDetailsForm ({
  employeeDetails,
  handleCancel,
  handleSave
}: Props) {
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      id: employeeDetails.id,
      employee_name: employeeDetails.employee_name,
      employee_salary: employeeDetails.employee_salary,
      employee_age: employeeDetails.employee_age
    }
  })
  const Submit = data => {
    handleSave(data)
  }
  return (
    <form
      onSubmit={handleSubmit(data => {
        Submit(data)
      })}
    >
      <PersonalDetailsForm register={register} errors={errors} />
      <br />
      <Divider />
      <br />
      <Buttons handleCancel={handleCancel} />
    </form>
  )
}
