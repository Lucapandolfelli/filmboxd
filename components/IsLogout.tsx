import Link from "next/link";

export default function IsLogout () {
  return (
    <li>
      <Link href='/login' className='bg-white text-sm text-[#14181c] py-[.5rem] px-[.75rem] rounded-[1rem] transition-all duration-300 ease-linear hover:bg-[#99aabb] hover:text-white'>Sign In</Link>
    </li>
  )
}