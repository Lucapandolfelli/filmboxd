import Link from "next/link"
import RegisterForm from "@/components/RegisterForm"

export default function RegisterPage (): JSX.Element {
  return (
    <>
      <RegisterForm />
      <p className='text-sm text-[#a2a4a7]'>Already have an account? <Link className='text-[#ff8000] font-semibold transition-all duration-300 ease-in hover:text-[#386eb4]' href='/login'>Log In</Link></p>
    </>
  )
}