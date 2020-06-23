import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import FaceIcon from '@material-ui/icons/Face'
import type { EmployeeListType } from '../../flow-types/employeesTypes'

type Props = {
  employees: EmployeeListType
}

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}))

function AvgSalary (empSal) {
  var sum = 0
  for (var i = 0; i < empSal.length; i++) {
    sum += parseInt(empSal[i], 10)
  }
  var avg = sum / empSal.length
  return avg.toFixed(2)
}

export default function Average ({ employeeSalary }: Props) {
  const empAvgSalary = AvgSalary(employeeSalary)
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
        Average Salary
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
                {empAvgSalary}
              </Typography>
            }
          />
        </div>
      </Popover>
    </div>
  )
}
