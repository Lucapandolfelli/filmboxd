'use client'

import { searchMovie } from "@/lib/films/fetch"
import { useState } from "react"
import { FaSearch } from 'react-icons/fa'
import { useRouter } from "next/navigation"

export default function SearchBar () {
  const [query, setQuery] = useState('')
  const [showBar, setShowBar] = useState(false) 
  const router = useRouter()
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!query) return
    setQuery('')
    router.push(`/search/${ query }`)
  }

  return (
    <>
      { showBar &&
        <form onSubmit={handleSubmit}>
          <input 
            className='bg-[#ffffe9] text-[#384653] text-sm rounded-[.75rem] py-[.35rem] px-[1rem] focus:outline-none placeholder:text-[#667788]'
            type="text"
            placeholder="Search for a film"
            value={query} 
            onChange={e => setQuery(e.target.value)} 
          />
        </form>
      }
      <button 
        className={ showBar ? 'text-lg w-[24px] h-full flex justify-center items-center transition-all duration-150 ease-in text-[#ff8000] hover:text-amber-700' : 'text-lg w-[24px] h-full flex justify-center items-center transition-all duration-150 ease-in hover:text-[#ff8000]' }
        onClick={() => setShowBar(!showBar)}>
        <span className='sr-only'>Search</span>
        <FaSearch />
      </button>
    </>
  )
}