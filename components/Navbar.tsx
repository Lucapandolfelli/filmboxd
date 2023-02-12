'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navbarItems = [
  { id: 1, label: 'Home', href: '/'},
  { id: 2, label: 'Films', href: '/films'},
]

export default function Navbar () {
  const pathname = usePathname()
  const [showNavbar, setShowNavbar] = useState('fixed top-0 left-0 w-full px-[1.25rem] md:p-0 transition-all durantion-500 ease-linear text-[#ffffe9] font-semibold h-[80px] z-50')

  useEffect(() => {
    const changeNavbarVisibility = () => {
      window.scrollY >= 100 ? setShowNavbar('bg-[#0e1114] transition-all durantion-500 ease-linear shadow-md fixed top-0 left-0 w-full px-[1.25rem] md:p-0 text-[#ffffe9] font-semibold h-[60px] z-50') : setShowNavbar('fixed top-0 left-0 w-full px-[1.25rem] md:p-0transition-all durantion-500 ease-linear text-[#ffffe9] font-semibold h-[80px] z-50')
    }
    window.addEventListener('scroll', changeNavbarVisibility)
  }, [])
  
  return (
    <header className={ pathname == '/login' || pathname == '/register' ? 'hidden' : showNavbar}>
      <div className='mx-auto h-full max-w-5xl flex justify-between items-center uppercase'>
        <h1 className='text-2xl'>App</h1>
        <nav>
          <ul className='flex items-center gap-[.75rem]'>
            {navbarItems.map((navItem) => (
              <li key={ navItem.id }><Link className={ pathname == navItem.href ? 'text-[#99aabb]' : 'transition-all duration-100 ease-linear hover:text-[#99aabb]'} href={ navItem.href }>{ navItem.label }</Link></li>
            ))}
            <li><Link href='/login' className='bg-white text-[#14181c] py-[.25rem] px-[.5rem] rounded-[.25rem] transition-all duration-300 ease-linear hover:bg-[#99aabb] hover:text-white'>Sign In</Link></li>
            {/* { session 
            ? <li><button onClick={() => signOut()} className='bg-white text-[#14181c] py-[.25rem] px-[.5rem] rounded-[.25rem] transition-all duration-300 ease-linear hover:bg-[#99aabb] hover:text-white uppercase'>Sign Out</button></li>
            : <li><Link href='/login' className='bg-white text-[#14181c] py-[.25rem] px-[.5rem] rounded-[.25rem] transition-all duration-300 ease-linear hover:bg-[#99aabb] hover:text-white'>Sign In</Link></li> } */}
          </ul>
        </nav>
      </div>
    </header>
  )
}