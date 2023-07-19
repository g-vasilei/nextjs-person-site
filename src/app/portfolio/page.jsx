import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCodeSlash } from 'react-icons/bs'
import { RiCodeSSlashFill } from 'react-icons/ri'

export const metadata = {
   title: 'gvasilei | portfolio',
   description: 'gvasilei portfolio page',
}

const portfolio = () => {
   return (
      <section className='px-3 mt-16'>
         <h1 className='text-4xl font-bold text-inherit flex items-center gap-6'>
            My Work <RiCodeSSlashFill size={40} />
         </h1>
         <p className='text-stone-400 mt-5'>Each project is unique. Here are some of my works.</p>
         <div className='max-w-5xl mt-20 mx-auto px-8 py-6 border-[1px] border-slate-100/50  rounded-xl lg:grid lg:grid-cols-2'>
            <Image className='rounded-md' src='/img-dynamo.png' width={400} height={200} alt='dynamo img' />
            <div className='text-center mt-5 lg:self-center lg:mt-0'>
               <Link href='https://dynamo.gr' className='text-2xl text-slate-50'>
                  https://dynamo.gr
               </Link>
               <p className='text-md mt-2'>
                  An e-commerce site, created with Wordpress using WooCommerce, Elementor and custom code.
               </p>
            </div>
         </div>
         <div className='max-w-5xl mt-20 mx-auto px-8 py-6 border-[1px] border-slate-100/50  rounded-xl lg:grid lg:grid-cols-2'>
            <Image className='rounded-md' src='/img-back.png' width={400} height={200} alt='backgammon img' />
            <div className='text-center mt-5 lg:self-center lg:mt-0'>
               <Link
                  href='https://users.iee.ihu.gr/~it164767/ADISE20_BACKGAMMON_PLAKOTO/index.html'
                  className='text-2xl text-slate-50'
               >
                  https://backgammon.gr/
               </Link>
               <p className='text-md mt-2'>
                  An e-commerce site, created with Wordpress using WooCommerce, Elementor and custom code.
               </p>
            </div>
         </div>
         {/* bg-gradient-to-b from-[#23253180] to-[#0f0f1880] */}
         <div className='max-w-5xl mt-20 mx-auto px-8 py-6 border-[1px] border-slate-100/50  rounded-xl lg:grid lg:grid-cols-2'>
            <Image className='rounded-md' src='/img-elec.png' width={400} height={200} alt='electrician img' />
            <div className='text-center mt-5 lg:self-center lg:mt-0'>
               <Link href='https://g-vasilei.gr' className='text-2xl text-slate-50'>
                  https://electrician.gr/
               </Link>
               <p className='text-md mt-2'>
                  An e-commerce site, created with Wordpress using WooCommerce, Elementor and custom code.
               </p>
            </div>
         </div>
      </section>
   )
}

export default portfolio
