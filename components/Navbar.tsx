'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navbarItems = [
  { id: 1, label: 'Home', href: '/'},
  { id: 2, label: 'Films', href: '/films'},
  { id: 3, label: 'Sign In', href: '/login'}
]

export default function Navbar () {
  const pathname = usePathname()
  const [showNavbar, setShowNavbar] = useState('navbar')

  useEffect(() => {
    const changeNavbarVisibility = () => {
      window.scrollY >= 100 ? setShowNavbar('bg-[#0e1114] transition-all durantion-500 ease-linear shadow-md fixed top-0 left-0 w-full text-[#ffffe9] font-semibold h-[60px] z-50') : setShowNavbar('fixed top-0 left-0 w-full transition-all durantion-500 ease-linear text-[#ffffe9] font-semibold h-[80px] z-50')
    }
    window.addEventListener('scroll', changeNavbarVisibility)
  }, [])
  
  return (
    <header className={ pathname == '/login' || pathname == '/register' ? 'hidden' : showNavbar}>
      <div className='mx-auto h-full max-w-5xl flex justify-between items-center uppercase'>
        <h1 className='text-2xl'>App</h1>
        <nav>
          <ul className='flex gap-[.75rem]'>
            {navbarItems.map((navItem) => (
              <li key={ navItem.id }><Link className={ pathname == navItem.href ? 'text-[#99aabb]' : 'transition-all duration-100 ease-linear hover:text-[#99aabb]'} href={ navItem.href }>{ navItem.label }</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}