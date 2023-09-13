import React from 'react'
import { BsEnvelope } from 'react-icons/bs'
import ContactForm from '../../components/ContactForm'

export const metadata = {
   title: 'gvasilei | contact',
   description: 'gvasilei contact page',
}

const contact = () => {
   return (
      <section className='px-3 mt-16'>
         <h1 className='text-4xl font-bold text-inherit flex items-center gap-6'>
            Contact Me <BsEnvelope size={40} />
         </h1>
         <p className='text-stone-400 mt-5'>Feel free to contact me. Glad to hear from you.</p>
         <ContactForm />
      </section>
   )
}

export default contact
