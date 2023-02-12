'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Footer () {
  const pathname = usePathname()
  const [showFooter, setShowFooter] = useState('bg-[#2c3440] h-[235px] pt-[1rem]')

  return (
    <footer className={ pathname == '/login' || pathname == '/register' ? 'hidden' : showFooter}>
      <div className='max-w-5xl mx-auto text-[#99aabb] text-center'>
        <p>&copy; 2023. Designed by <Link href='https://lucapandolfelli.com'>Luca Pandolfelli</Link></p>
      </div>
    </footer>
  )
}