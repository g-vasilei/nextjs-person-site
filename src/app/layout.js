import Footer from '../components/Footer'
import Header from '../components/Header'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'gvasilei',
   description: 'gvasilei personal site',
}

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <ThemeProvider>
               <main className='md:min-h-screen flex flex-col justify-between items-center'>
                  <Header />
                  <div className='max-w-screen-xl w-full'>{children}</div>
                  <Footer />
               </main>
            </ThemeProvider>
         </body>
      </html>
   )
}
