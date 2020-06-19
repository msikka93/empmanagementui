// In a nutshell, components are supposed to be concerned only with displaying stuff.
// The only place they are supposed to get information from is their props.
// data and event handler functions should come as props
// layout components should be stateless
// purpose is to group all other components in the page together
import React, { Component } from 'react'
import ComingSoon from './ComingSoon'
type Props = {}

export default class HomeLayout extends Component<Props> {
  render () {
    return (
      <div style={{ padding: '5rem 0 0 0' }}>
        <ComingSoon />
      </div>
    )
  }
}
