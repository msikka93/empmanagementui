import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import FaceIcon from '@material-ui/icons/Face'
import type { EmployeeListType } from '../../flow-types/employeesTypes'

type Props = {
  employeeSalary: EmployeeListType
}

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}))

function TotalSalary (empSal) {
  var sum = 0
  for (var i = 0; i < empSal.length; i++) {
    sum += parseInt(empSal[i], 10)
  }
  return sum
}

export default function Total ({ employeeSalary }: Props) {
  const empTotalSalary = TotalSalary(employeeSalary)
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <Button
        aria-describedby={id}
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        Total Salary
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <div style={{ margin: '1px' }}>
          <Chip
            color='secondary'
            icon={<FaceIcon />}
            label={
              <Typography className={classes.typography}>
                {empTotalSalary}
              </Typography>
            }
          />
        </div>
      </Popover>
    </div>
  )
}
