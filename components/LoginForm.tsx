'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

export default function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signIn('credentials', {
      email,
      password,
      callbackUrl: '/'
    })
  }

  const handleGoogleSignIn = () => {
    signIn('google', {
      callbackUrl: `${ process.env.NEXT_PUBLIC_HOST }`
    })
  }

  return (
    <div className='w-[300px]'>
      <form className='flex flex-col gap-[1rem] w-full' onSubmit={handleSubmit}>
        <div>
          <input 
            className='w-full bg-transparent border-[1px] border-[#384653] rounded-[.25rem] p-[.75rem] focus:outline-none focus:bg-[#232930]' 
            onChange={e => setEmail(e.target.value)} 
            value={email} 
            type="mail" 
            name="email" 
            placeholder="Email" />
        </div>
        <div className='relative mb-[2.5rem]'>
          <input 
            className='w-full bg-transparent border-[1px] border-[#384653] rounded-[.25rem] p-[.75rem] focus:outline-none focus:bg-[#232930]' 
            onChange={e => setPassword(e.target.value)} 
            value={password} 
            type="password" 
            name="password" 
            placeholder="Password" />
          <span className='text-sm text-[#667788] font-semibold absolute bottom-[-2rem] right-0 transition-all duration-150 ease-in hover:cursor-pointer hover:text-[#4d5b69]'>Forgot Password?</span>
        </div>
        <button 
          className='bg-amber-600 py-[.75rem] rounded-[.25rem] text-white font-semibold transition-all duration-150 ease-linear hover:bg-amber-700' 
          type="submit">Login
        </button>
      </form>
      <button className='mt-[.75rem] bg-white py-[.75rem] w-full rounded-[.25rem] text-[#757575] border-[2px] border-white font-semibold transition-all duration-150 ease-linear hover:border-[#4285f4] hover:outline hover:outline-4 hover:outline-[#4285f4]/10 flex justify-center items-center gap-[.5rem]' onClick={handleGoogleSignIn}>
        <FcGoogle className='text-2xl' />
        <p>Sign in with Google</p>
      </button>
    </div>
  )
}