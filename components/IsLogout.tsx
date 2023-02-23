import Link from "next/link";

export default function IsLogout () {
  return (
    <li>
      <Link href='/login' className='inline-block bg-[#ff8000] font-lighter text-[#ffffe9] py-[.5rem] px-[1.25rem] rounded-[60px] transition-all duration-300 ease-linear hover:bg-[#99aabb] hover:text-white'>Sign In</Link>
    </li>
  )
}