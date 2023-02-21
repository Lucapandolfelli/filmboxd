'use client'

import { useSession } from "next-auth/react"
import Image from "next/image"

export default function UserPage () {
  const { data: session } = useSession()

  return (
    <main>
      <section className='w-full h-[160px] bg-center bg-cover' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,24,28,1) 2%, rgba(20,24,28,0.725910432532388) 18%, rgba(20,24,28,0.01162471824667366) 100%), url('/images/login_background.jpg')` }}></section>
      <section className='max-w-5xl mx-auto'>
        <h1>{ session?.user?.name }</h1>
        <span>{ session?.user?.email }</span>
        <div className='w-[60px] h-[60px] rounded-full relative'>
          {/* <img src={ session?.user?.image } alt='user'/> */}
        </div>
      </section>
    </main>
  )
}