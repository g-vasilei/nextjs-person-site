'use client'
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { Courgette } from 'next/font/google'
import { usePathname } from 'next/navigation'
import DarkModeToggle from './DarkModeToggle'
import { ThemeContext } from '../context/ThemeContext'

const cour = Courgette({
   weight: '400',
   subsets: ['latin'],
})

const Header = () => {
   const [menu, setMenu] = useState(false)

   const pathname = usePathname()

   const { mode } = useContext(ThemeContext)

   return (
      <header className='flex items-center justify-between bg-inherit text-inherit max-w-screen-2xl w-full mx-auto py-4 relative px-3'>
         <h2 className={`text-2xl font-bold ${cour.className}`}>
            <Link href='/'>gvasilei</Link>
         </h2>
         <nav
            className={`fixed h-screen ${
               mode === 'dark' ? 'bg-gradient-to-b from-[#111] to-[#113]' : 'bg-white'
            } text-inherit top-0 w-full z-[5] transition-all ease-in duration-500 md:h-fit md:w-fit md:relative md:to-[#111] md:top-auto md:left-auto ${
               menu ? 'left-0' : '-left-full'
            }`}
         >
            <ul className='flex flex-col items-center justify-center text-inherit sm:h-full gap-7 cursor-pointer h-full md:flex-row md:h-fit md:gap-4 md:w-fit'>
               <div className='hidden md:block'>
                  <DarkModeToggle />
               </div>
               <li
                  className={`py-2 px-3 hover:bg-white/40 hover:backdrop-blur-xl rounded-md transition ease-in-out duration-200 ${
                     pathname === '/' && 'bg-white/40 backdrop-blur-xl'
                  } `}
                  onClick={() => setMenu((prevState) => !prevState)}
               >
                  <Link href='/'>HOME</Link>
               </li>
               <li
                  className={`py-2 px-3 hover:bg-white/40 hover:backdrop-blur-xl rounded-md transition ease-in-out duration-200 ${
                     pathname === '/about' && 'bg-white/40 backdrop-blur-xl'
                  }`}
                  onClick={() => setMenu((prevState) => !prevState)}
               >
                  <Link href='/about'>ABOUT</Link>
               </li>
               <li
                  className={`py-2 px-3 hover:bg-white/40 hover:backdrop-blur-xl rounded-md transition ease-in-out duration-200 ${
                     pathname === '/portfolio' && 'bg-white/40 backdrop-blur-xl'
                  }`}
                  onClick={() => setMenu((prevState) => !prevState)}
               >
                  <Link href='/portfolio'>PORTFOLIO</Link>
               </li>
               <li
                  className={`py-2 px-3 hover:bg-white/40 hover:backdrop-blur-xl rounded-md transition ease-in-out duration-200 ${
                     pathname === '/contact' && 'bg-white/40 backdrop-blur-xl'
                  }`}
                  onClick={() => setMenu((prevState) => !prevState)}
               >
                  <Link href='/contact'>CONTACT</Link>
               </li>
            </ul>
         </nav>
         <div className='z-10 relative flex items-center gap-5 md:hidden'>
            <div className='md:hidden'>
               <DarkModeToggle />
            </div>
            <div onClick={() => setMenu((prevState) => !prevState)}>
               <div
                  className={`w-6 h-[2px]  transition ease-in-out duration-300 mb-[4px] ${
                     menu && '-rotate-45 translate-y-1.5'
                  } ${mode === 'light' ? 'bg-gray-950' : 'bg-slate-100'}`}
               ></div>
               <div
                  className={`w-6 h-[2px] transition ease-in-out duration-300 mb-[4px] ${menu && 'invisible'} ${
                     mode === 'light' ? 'bg-gray-950' : 'bg-slate-100'
                  }`}
               ></div>
               <div
                  className={`w-6 h-[2px] transition ease-in-out duration-300 ${menu && 'rotate-45 -translate-y-1.5'} ${
                     mode === 'light' ? 'bg-gray-950' : 'bg-slate-100'
                  }`}
               ></div>
            </div>
         </div>
      </header>
   )
}

export default Header
