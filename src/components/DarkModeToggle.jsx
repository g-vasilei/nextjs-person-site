'use client'

import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const DarkModeToggle = () => {
   const { toggle, mode } = useContext(ThemeContext)
   return (
      <div
         className='flex items-center gap-1 border-[#d8d8d8] border-[1px] rounded-full p-[2px] text-sm relative'
         onClick={toggle}
      >
         <div className=''>🌙</div>
         <div className=''>🔆</div>
         <div
            className={`absolute w-[18px] h-[18px] md:w-[16px] md:h-[16px] bg-violet-700 rounded-full transition-all ease-in duration-500 ${
               mode === 'dark' ? 'right-[4px]' : 'left-[4px]'
            }`}
         />
      </div>
   )
}

export default DarkModeToggle
