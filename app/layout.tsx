import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className='bg-gradient-to-tr from-[#14181c] to-[#1b2128]'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
