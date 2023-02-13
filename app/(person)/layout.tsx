import React from "react";

export default function PersonLayout ({ children }: { children: React.ReactNode }) {
  return (
    <main className='text-[#99aabb]'>
      <section className='w-full h-[160px] bg-center bg-cover' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,24,28,1) 2%, rgba(20,24,28,0.725910432532388) 18%, rgba(20,24,28,0.01162471824667366) 100%), url('/images/login_background.jpg')` }}></section>
      <section className='max-w-5xl h-fit mx-auto px-[1.25rem] py-[2rem] md:px-0 flex flex-col gap-[1rem]'>
        { children }
      </section>
    </main>
  )
}