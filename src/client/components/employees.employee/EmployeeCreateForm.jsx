// Refs: https://react-hook-form.com/advanced-usage#ConnectForm
import React from 'react'
import Divider from '@material-ui/core/Divider'
import { useForm } from 'react-hook-form'
import CreateDetailsForm from './CreateDetailsForm'
import Button from '@material-ui/core/Button'

type Props = {
  handleCreate: (a: {}) => void,
  handleCancel: () => void
}

export default function EmployeeCreateForm ({
  handleCancel,
  handleCreate
}: Props) {
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {}
  })
  const Submit = data => {
    handleCreate(data)
    handleCancel()
  }
  return (
    <form
      onSubmit={handleSubmit(data => {
        Submit(data)
      })}
    >
      <CreateDetailsForm register={register} errors={errors} />
      <br />
      <Divider />
      <br />
      <Button
        id='btn-cancel-emp-create'
        variant='contained'
        onClick={handleCancel}
      >
        Cancel
      </Button>
      &nbsp;&nbsp;
      <Button
        id='btn-save-emp-create'
        variant='contained'
        color='primary'
        type='submit'
      >
        Submit
      </Button>
    </form>
  )
}
