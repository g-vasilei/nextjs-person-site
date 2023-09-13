'use client'

import { createContext, useState } from 'react'

interface CurrentUserContextType {
   toggle: () => void
   mode: string
}

export const ThemeContext = createContext<CurrentUserContextType | null>(null)

export const ThemeProvider = ({ children }) => {
   const [mode, setMode] = useState('dark')

   const toggle = () => {
      setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
   }

   return (
      <ThemeContext.Provider value={{ toggle, mode }}>
         <div className={`${mode === 'dark' ? 'dark' : 'light'}`}>{children}</div>
      </ThemeContext.Provider>
   )
}
