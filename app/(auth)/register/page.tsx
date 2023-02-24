import Link from "next/link"
import RegisterForm from "@/components/RegisterForm"

export default function RegisterPage (): JSX.Element {
  return (
    <>
      <h1 className='text-[2rem] text-center font-semibold'>Sign Up</h1>
      <RegisterForm />
      <p className='text-[#a2a4a7]'>Already have an account? <Link className='text-[#4982cf] font-semibold transition-all duration-300 ease-in hover:text-[#386eb4]' href='/login'>Log In</Link></p>
    </>
  )
}