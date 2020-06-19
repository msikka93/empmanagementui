import React from 'react'
import type { Node } from 'react'
import BaseNavigation from './BaseNavigation'

type Props = {
  location: {
    pathname: string
  },
  children: Node
}

export default function Home (props: Props) {
  const { location } = props

  return (
    <div className='fabric-ui-view'>
      <div style={{ position: 'relative', zIndex: 100 }}>
        <BaseNavigation location={location} />
      </div>
      <div className='container-fluid main'>{props.children}</div>
    </div>
  )
}
Home.defaultProps = {
  location: {}
}
