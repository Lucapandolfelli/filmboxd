import Link from "next/link"
import Image from "next/image"

interface Props {
  children: React.ReactNode
}

export default function UserLayout ({ children }: Props) {
  return (
    <main className='bg-gradient-to-tr from-[#000] to-[#0e1114] h-screen flex justify-center items-center'>
      <section className='bg-[#14181c] w-[1000px] h-[700px] flex shadow-2xl rounded-[.75rem] overflow-hidden'>
        <div className='relative w-[50%] bg-center bg-cover' style={{ backgroundImage: `url('/images/login.jpg')` }}>
          <p className='text-sm text-[#ffffe9] font-bold absolute left-[.75rem] bottom-[.5rem]'>Blade Runner 2049</p>
        </div>
        <div className='w-[50%] flex flex-col justify-center items-center gap-[4rem] text-[#99aabb]'>
          <Link href='/' className='flex items-center gap-[.25rem]'>
            <figure className='w-[60px] h-[20px] relative'>
              <Image src='/images/filmboxd-navbar.png' fill alt='Filmboxd Logo' className='object-contain' />
            </figure>
            <h1 className='text-white text-2xl font-bold'>{ process.env.NEXT_PUBLIC_APP_NAME }</h1>
          </Link>
          { children }
        </div>
      </section>
    </main>
  )
}