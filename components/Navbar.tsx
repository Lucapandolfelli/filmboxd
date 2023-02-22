'use client'

import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import IsLogin from "./IsLogin"
import IsLogout from "./IsLogout"

const navbarItems = [
  { id: 1, label: 'Home', href: '/'},
  { id: 2, label: 'Films', href: '/films'},
  { id: 3, label: 'Popular', href: '/films/popular'},
]

export default function Navbar () {
  const pathname = usePathname()
  const [showNavbar, setShowNavbar] = useState('fixed top-0 left-0 w-full px-[1.25rem] md:p-0 transition-all durantion-500 ease-linear text-[#ffffe9] font-semibold h-[80px] z-50')
  const { data: session, status } = useSession() 

  useEffect(() => {
    const changeNavbarVisibility = () => {
      window.scrollY >= 100 ? setShowNavbar('bg-[#0e1114] transition-all durantion-500 ease-linear shadow-md fixed top-0 left-0 w-full px-[1.25rem] md:p-0 text-[#ffffe9] font-semibold h-[60px] z-50') : setShowNavbar('fixed top-0 left-0 w-full px-[1.25rem] md:p-0transition-all durantion-500 ease-linear text-[#ffffe9] font-semibold h-[80px] z-50')
    }
    window.addEventListener('scroll', changeNavbarVisibility)
  }, [])
  
  return (
    <header className={ pathname == '/login' || pathname == '/register' ? 'hidden' : showNavbar}>
      <div className='mx-auto h-full max-w-5xl flex justify-between items-center'>
        <Link href='/' className='flex items-center gap-[.5rem]'>
          <figure className='w-[60px] h-[25px] relative'>
            <Image src='/images/filmboxd-navbar.png' fill alt='Filmboxd Logo' className='object-contain' />
          </figure>
          <h1 className='text-2xl'>{ process.env.NEXT_PUBLIC_APP_NAME }</h1>
        </Link>
        <nav>
          <ul className='hidden sm:flex items-center gap-[.75rem] uppercase'>
            {navbarItems.map((navItem) => (
              <li key={ navItem.id }><Link className={ pathname == navItem.href ? 'text-amber-600' : 'transition-all duration-100 ease-linear hover:text-amber-600'} href={ navItem.href }>{ navItem.label }</Link></li>
            ))}
            { session 
            ? <IsLogin username={ session.user?.name } avatar={ session.user?.image } />
            : <IsLogout /> }
          </ul>
        </nav>
      </div>
    </header>
  )
}