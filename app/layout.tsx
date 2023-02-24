'use client'

import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { SessionProvider } from 'next-auth/react'

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props): JSX.Element {
  return (
    <html lang="en">
      <head />
      <SessionProvider>
        <body className='bg-[#14181c]'>
          <Navbar />
          {children}
          <Footer />
        </body>
      </SessionProvider>
    </html>
  )
} 
