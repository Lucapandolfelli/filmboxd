'use client'

import { searchMovie } from "@/lib/films/fetch"
import { useState } from "react"
import { FaSearch } from 'react-icons/fa'
import { useRouter } from "next/navigation"

export default function SearchBar () {
  const [query, setQuery] = useState('')
  const router = useRouter()
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!query) return
    setQuery('')
    router.push(`/search/${ query }`)
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-[.5rem]'>
      <input 
        className='bg-[#ffffe9] text-[#384653] border-[1px] border-[#384653] rounded-[.25rem] p-[.25rem] focus:outline-none'
        type="text"
        placeholder="Search for a film"
        value={query} 
        onChange={e => setQuery(e.target.value)} 
      />
      <button 
        className='text-lg w-[24px] h-full flex justify-center items-center'
        disabled={!query}>
        <span className='sr-only'>Search</span>
        <FaSearch />
      </button>
    </form>
  )
}