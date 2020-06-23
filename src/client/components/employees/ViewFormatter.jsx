import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Edit from '@material-ui/icons/Edit'
import Visibility from '@material-ui/icons/Visibility'
import Delete from '@material-ui/icons/Delete'

type Props = {
  value: string,
  type: string,
  handleClick: string => void
}

export default function ViewFormatter ({ value, handleClick, type }: Props) {
  return (
    <IconButton onClick={() => handleClick(value)}>
      {type === 'view' ? (
        <Visibility />
      ) : type === 'delete' ? (
        <Delete />
      ) : (
        <Edit />
      )}
    </IconButton>
  )
}
