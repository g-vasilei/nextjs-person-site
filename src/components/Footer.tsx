import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
   return (
      <div className='w-full flex flex-col justify-start gap-5 py-4 px-3 mt-10 max-w-screen-2xl mx-auto md:flex-row md:items-center md:justify-between'>
         <div>©2023 gvasilei. All rights reserved.</div>
         <div>
            <Link href='https://github.com/g-vasilei'>
               <BsGithub size={20} />
            </Link>
         </div>
      </div>
   )
}

export default Footer
