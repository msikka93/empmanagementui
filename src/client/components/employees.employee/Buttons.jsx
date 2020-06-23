import React from 'react'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'

type Props = {
  handleCancel: () => void
}

export default function Buttons ({ handleCancel }: Props) {
  return (
    <div>
      <div>
        <Typography color='secondary'>
          <small>* Mandatory Fields</small>
        </Typography>
      </div>
      <Button
        id='btn-cancel-emp-edit'
        variant='contained'
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
