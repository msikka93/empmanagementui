import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeLayout from '../components/home'

type Props = {}

export class LoginContainer extends Component<Props> {
  render () {
    return <HomeLayout />
  }
}

export const mapStateToProps = state => {
  return {}
}

export const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
