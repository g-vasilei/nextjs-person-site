'use client'
import React from 'react'
import Lottie from 'lottie-react'
import circle from '../../assets/circle.json'

const CircleAnimation = () => {
   return <Lottie className='w-full' animationData={circle} />
}

export default CircleAnimation
