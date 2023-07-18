import ReactAnimation from '@/components/animations/ReactAnimation'
import WordpressAnimation from '@/components/animations/WordpressAnimation'
import React from 'react'
const reactSkills = [
   'HTML',
   'CSS',
   'JavaScript',
   'React',
   'SASS',
   'Tailwind',
   'Github',
   'Responsive design',
   'SEO',
   'Express Basic',
   'MongoDB',
]

const wpSkills = [
   'HTML',
   'CSS',
   'JavaScript',
   'Responsive design',
   'Custome Theme',
   'SASS',
   'PHP',
   'Github',
   'SEO',
   'WooCommerce',
   'SQL',
]
const about = () => {
   return (
      <div className='px-3 py-4 mt-10'>
         <div className='md:grid md:grid-cols-2 md:gap-10 mb-20'>
            <div className=' max-w-full bg-violet-300 rounded-3xl md:max-h-72'>
               <div className='max-w-xs mx-auto'>
                  <ReactAnimation />
               </div>
            </div>
            <div className='mt-10'>
               <h2 className='text-2xl font-bold mb-4'>Custome Site</h2>
               <div className='flex items-center flex-wrap gap-4'>
                  {reactSkills.map((skill, idx) => (
                     <div key={idx} className='py-2 px-4 bg-violet-700 rounded-xl font-semibold'>
                        {skill}
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className='md:grid md:grid-cols-2 md:gap-10 mb-10'>
            <div className=' max-w-full bg-violet-300 rounded-3xl md:max-h-72'>
               <div className='max-w-[240px] lg:min-h-[288px] mx-auto mt-6'>
                  <WordpressAnimation />
               </div>
            </div>
            <div className='mt-10'>
               <h2 className='text-2xl font-bold mb-4'>Wordpress Site</h2>
               <div className='flex items-center flex-wrap gap-4'>
                  {wpSkills.map((skill, idx) => (
                     <div key={idx} className='py-2 px-4 bg-violet-700 rounded-xl font-semibold'>
                        {skill}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default about
