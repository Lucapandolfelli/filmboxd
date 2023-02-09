'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { SessionProvider } from "next-auth/react"
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
