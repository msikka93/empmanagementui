import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ComingSoon from './ComingSoon'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

export default function HomeLayout () {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{ padding: '8rem 0rem 0 0' }}>
      <Grid container spacing={2} alignItems='center'>
        <Grid item style={{ marginLeft: '13rem' }}>
          <ButtonBase>
            <ComingSoon />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container alignItems='center'>
          <Grid item xs container direction='column' spacing={1}>
            <Grid item xs>
              <Typography gutterBottom variant='h4'>
                <strong>Welcome</strong>
              </Typography>
              <Typography variant='h4' gutterBottom>
                <strong>EBF</strong>
              </Typography>
              <Typography variant='h4' gutterBottom>
                <strong>Employee Management System</strong>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
