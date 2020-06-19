import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/lottie-files/analytics.json'
import animationData1 from '../../assets/lottie-files/coming-soon.json'

export default function SuccessAnimation () {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div>
      <div style={{ background: '#1a3c7b' }}>
        <Lottie options={defaultOptions1} height={200} width={200} />
      </div>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  )
}
