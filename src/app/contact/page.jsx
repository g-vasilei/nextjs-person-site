import React from 'react'
import { BsEnvelope } from 'react-icons/bs'
import ContactForm from '@/components/ContactForm'

const contact = () => {
   return (
      <section className='px-3 mt-16'>
         <h1 className='text-4xl font-bold text-inherit flex items-center gap-6'>
            Contact Me <BsEnvelope size={40} />
         </h1>
         <ContactForm />
      </section>
   )
}

export default contact
