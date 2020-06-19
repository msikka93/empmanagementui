import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Edit from '@material-ui/icons/Edit'
import Visibility from '@material-ui/icons/Visibility'

type Props = {
  value: string,
  type: string,
  handleClick: string => void
}

export default function ViewFormatter ({ value, handleClick, type }: Props) {
  return (
    <IconButton onClick={() => handleClick(value)}>
      {type === 'view' ? <Visibility /> : <Edit />}
    </IconButton>
  )
}
