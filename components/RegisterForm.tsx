'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterForm () {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ username, email, password });
    fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    }).then(() => router.push('/login')).catch((err) => console.log(err))
  }

  return (
    <form className='flex flex-col gap-[1rem] w-[300px]' action='/api/auth/register' method='POST' onSubmit={handleSubmit}>
      <input 
        className='w-full bg-transparent border-[1px] border-[#384653] rounded-[.25rem] p-[.75rem] focus:outline-none focus:bg-[#232930]'
        onChange={e => setUsername(e.target.value)} 
        value={username} 
        type="text" 
        name="username" 
        id="username" 
        placeholder="Username" />
      <input 
        className='w-full bg-transparent border-[1px] border-[#384653] rounded-[.25rem] p-[.75rem] focus:outline-none focus:bg-[#232930]'
        onChange={e => setEmail(e.target.value)} 
        value={email} 
        type="mail" 
        name="email" 
        id="email" 
        placeholder="Email" />
      <input 
        className='w-full bg-transparent border-[1px] border-[#384653] rounded-[.25rem] p-[.75rem] focus:outline-none focus:bg-[#232930]'
        onChange={e => setPassword(e.target.value)} 
        value={password} 
        type="password" 
        name="password" 
        id="password" 
        placeholder="Password" />
      <button 
        className='bg-[#ff8000] py-[.75rem] rounded-[.25rem] text-white font-semibold transition-all duration-150 ease-linear hover:bg-amber-700' 
        type="submit">Sign Up
      </button>
    </form>
  )
}