import React from 'react'
import MuiAlert from '@material-ui/lab/Alert'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export default function WithLoading (Component) {
  return function WithLoadingComponent ({ isLoading, hasError, ...props }) {
    if (hasError) {
      return (
        <Card>
          <CardContent>
            <Alert severity='error'>Something Went Wrong</Alert>
          </CardContent>
        </Card>
      )
    }

    if (isLoading) return null

    return <Component {...props} />
  }
}
