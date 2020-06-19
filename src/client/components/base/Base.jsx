import React, { Component } from 'react'
import BackgroundIcon from '../shared/BackgroundIcon'
import { renderToStaticMarkup } from 'react-dom/server'

export default class Base extends Component {
  render () {
    const dataUri = `url("data:image/svg+xml,${encodeURIComponent(
      renderToStaticMarkup(<BackgroundIcon />)
    )}")`
    const style = {
      backgroundImage: dataUri,
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'right',
      backgroundPositionY: 'bottom'
    }
    return (
      <div className='fabric-ui-base' style={style}>
        {this.props.children}
      </div>
    )
  }
}
