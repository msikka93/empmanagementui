import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/base/Home'
import { withRouter } from 'react-router'

export class HomeContainer extends Component {
  render () {
    return <Home {...this.props} />
  }
}

export const mapStateToProps = state => ({})

export const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeContainer))
