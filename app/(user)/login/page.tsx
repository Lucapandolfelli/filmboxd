import Link from "next/link"
import LoginForm from "@/components/LoginForm"

export default function LoginPage (){
  return (
    <>
      <h1 className='text-[2rem] text-center font-semibold'>Login</h1>
      <LoginForm />
      <p className='text-[#a2a4a7]'>Don´t have account yet? <Link className='text-[#4982cf] font-semibold transition-all duration-300 ease-in hover:text-[#386eb4]' href='/register'>Sign Up</Link></p>
    </>
  )
}

