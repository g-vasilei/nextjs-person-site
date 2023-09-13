'use client'

import React from 'react'
import Lottie from 'lottie-react'
import contact from '../../assets/contact.json'

const ContactAnimation = () => {
   return (
      <div className='flex justify-center'>
         <div className='max-w-xs'>
            <Lottie className='w-full' animationData={contact} />
         </div>
      </div>
   )
}

export default ContactAnimation
