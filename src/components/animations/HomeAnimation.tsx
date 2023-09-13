'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animation from '../../assets/programmer.json'

const HomeAnimation = () => {
   return (
      <div>
         <Lottie className='w-full' animationData={animation} />
      </div>
   )
}

export default HomeAnimation
