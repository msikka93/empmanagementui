import React from 'react'
import type { Node } from 'react'
import Typography from '@material-ui/core/Typography'

type Props = {
  id?: string,
  label: string,
  value?: string,
  className: string,
  children: Node
}

export default function DryField ({
  id,
  label,
  value,
  className,
  children
}: Props) {
  const renderValue = value => {
    if (!value) return null
    return <strong>{value}</strong>
  }
  return (
    <div id={id} className={className}>
      <Typography style={{ color: '#002d72', margin: '0.3rem 0' }}>
        <small style={{ color: '#667284' }}>{label}</small>
        <br />
        {renderValue(value)}
        {children}
      </Typography>
    </div>
  )
}
