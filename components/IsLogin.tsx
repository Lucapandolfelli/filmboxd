'use client'

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  username: string,
  avatar: string
}

export default function IsLogin ({ username, avatar }: Props) {
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleSignOut = () => {
    signOut({
      callbackUrl: process.env.NEXT_PUBLIC_HOST
    })
  }

  return (
    <li className='h-[40px] relative'>
      <button className='w-[40px] h-[40px] bg-slate-300 rounded-full overflow-hidden' onClick={() => setOpenDropdown(!openDropdown)}>
        <img src={ avatar } alt={ username } className='w-full h-full' />
      </button>
      { openDropdown && 
        <Dropdown>
          <DropdownItem href="/user">Profile</DropdownItem>
          <DropdownItem action={handleSignOut}>Sign Out</DropdownItem>
        </Dropdown>
      }
    </li> 
  )
}

function Dropdown ({ children }: { children: React.ReactNode }) {
  return (
    <div className='absolute top-[3rem] right-0 w-[250px] bg-[#0e1114] rounded-[.5rem] p-[1rem] overflow-hidden flex flex-col gap-[.5rem]'>
      { children }
    </div>
  )
}

function DropdownItem ({ children, href, action }: { children: React.ReactNode, href?: string, action?: any }) {
  return (
    <Link href={`${href}`} className='w-full h-[50px] rounded-[.25rem] bg-[#14181c] p-[.5rem] flex items-center' onClick={action}>
      { children }
    </Link>
  )
}