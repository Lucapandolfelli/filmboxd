import { signOut } from "next-auth/react";
import Link from "next/link";

interface Props {
  username: any,
  avatar: any
}

export default function IsLogin ({ username, avatar }: Props) {
  return (
    <>
      <li><button onClick={() => signOut()} className='bg-white text-sm text-[#14181c] py-[.5rem] px-[.75rem] rounded-[1rem] transition-all duration-300 ease-linear hover:bg-[#99aabb] hover:text-white'>Sign Out</button></li>
      <Link href='/user' className='w-[40px] h-[40px] bg-slate-300 rounded-full overflow-hidden'>
        <img src={ avatar } alt={ username } className='w-full h-full' />
      </Link>
    </>
  )
}