import Image from "next/image"
import moviesBackground from '@/images/login_background.jpg'

export default function UserLayout ({ children }: { children: React.ReactNode }) {
  return (
    <main className='bg-gradient-to-tr from-[#765ab9] to-[#4982cf] h-screen flex justify-center items-center'>
      <section className='bg-white w-[1000px] h-[700px] flex shadow-2xl'>
        <div className='relative w-[50%]'>
          <Image src={moviesBackground} alt='Login Wallpaper' fill className='object-cover' />
        </div>
        <div className='w-[50%] flex flex-col justify-center items-center gap-[4rem]'>
          { children }
        </div>
      </section>
    </main>
  )
}