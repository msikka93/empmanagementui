import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/lottie-files/analytics.json'

export default function SuccessAnimation () {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}
