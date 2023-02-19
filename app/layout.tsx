import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body className='bg-[#14181c]'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
} 
