import Link from "next/link"
import LoginForm from "@/components/LoginForm"

export default function LoginPage (): JSX.Element {
  return (
    <>
      {/* <h1 className='text-[2rem] text-center font-semibold'>Login</h1> */}
      <LoginForm />
      <p className='text-sm text-[#a2a4a7]'>New in Filmboxd? <Link className='text-[#ff8000] font-semibold transition-all duration-300 ease-in hover:text-amber-700' href='/register'>Create Account</Link></p>
    </>
  )
}

