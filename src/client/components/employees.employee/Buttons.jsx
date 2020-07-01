import React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  handleCancel: () => void
}

export default function Buttons ({ handleCancel }: Props) {
  return (
    <div>
      <Button
        id='btn-cancel-emp-edit'
        variant='contained'
        color='secondary'
        onClick={handleCancel}
      >
        Cancel
      </Button>
      &nbsp;&nbsp;
      <Button
        id='btn-save-emp-edit'
        variant='contained'
        color='primary'
        type='submit'
      >
        Save
      </Button>
    </div>
  )
}
