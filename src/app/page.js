import CircleAnimation from '@/components/animations/CircleAnimation'
import HomeAnimation from '@/components/animations/HomeAnimation'
import Link from 'next/link'

export const metadata = {
   title: 'gvasilei',
   description: 'gvasilei personal site',
}

export default function Home() {
   return (
      <section className='flex flex-col w-full items-center justify-between relative py-10 px-3 md:grid grid-cols-2'>
         <div>
            <div className='text-4xl font-bold text-inherit'>
               <h1>
                  Hi, I&apos;m <span className='text-violet-700 text-5xl'>George</span>
                  <br></br>
                  Web developer
               </h1>
               <div className='text-xl text-stone-400 mt-10'>Specializing in custom pages and e-shops.</div>
            </div>
            <div className='mt-16'>
               <Link
                  className='border-4 border-violet-700 px-10 py-4 text-xl rounded-lg font-semibold mt-10'
                  href='https://ptuxiakh-production.up.railway.app/login'
               >
                  GET RESUME
               </Link>
            </div>
         </div>
         <div className='w-full mt-20 md:mt-0'>
            <HomeAnimation className='' />
         </div>
         <div className='max-w-[180px] absolute hidden md:block md:-top-14 lg:top-7 lg:-left-24'>
            <CircleAnimation size={30} />
         </div>
      </section>
   )
}
