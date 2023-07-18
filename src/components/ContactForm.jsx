'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MdOutlineMailOutline, MdLocationPin } from 'react-icons/md'
import ContactAnimation from './animations/ContactAnimation'

const ContactForm = () => {
   const form = useRef()
   const [emailStatus, setEmailStatus] = useState(null)

   const sendEmail = (e) => {
      e.preventDefault()
      if (!form.current.name.value || !form.current.email.value || !form.current.message.value) {
         setEmailStatus('Fill')
         return
      } else {
         emailjs.sendForm('service_yvk75qa', 'template_pddl8c4', form.current, 'kRiCww1-y_w7kpeo6').then(
            (result) => {
               setEmailStatus('Success')
               console.log(result)
            },
            (error) => {
               setEmailStatus('Fail')
               console.log(error)
            }
         )
      }

      e.target.reset()
   }
   return (
      <div className='mt-16 md:mt-20 lg:grid-cols-3 grid'>
         <div className='grid-col self-center mb-10'>
            <ContactAnimation />
            <p className='flex items-center justify-center gap-3'>
               <MdOutlineMailOutline size={20} /> email: info@gvasilei.gr
            </p>
            <p className='flex items-center justify-center gap-3 mt-5'>
               <MdLocationPin size={20} /> location: Veroia
            </p>
         </div>
         <form ref={form} onSubmit={sendEmail} className='lg:col-span-2'>
            <input type='text' name='name' id='' placeholder='Name' className='w-full h-10 mb-5 px-2 rounded-sm' />
            <input type='mail' name='email' id='' placeholder='email' className='w-full h-10 mb-5 px-2 rounded-sm' />
            <input
               type='text'
               name='message'
               id=''
               placeholder='Message'
               className='w-full h-32  mb-5  px-2 rounded-sm'
            />
            <button type='submit' className='py-4 px-6 bg-violet-700 text-white rounded-lg'>
               Send
            </button>
         </form>
      </div>
   )
}

export default ContactForm
