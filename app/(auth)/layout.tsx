interface Props {
  children: React.ReactNode
}

export default function UserLayout ({ children }: Props) {
  return (
    <main className='bg-gradient-to-tr from-[#765ab9] to-[#4982cf] h-screen flex justify-center items-center'>
      <section className='bg-white w-[1000px] h-[700px] flex shadow-2xl'>
        <div className='relative w-[50%]' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('/images/login_background.jpg')` }}></div>
        <div className='w-[50%] flex flex-col justify-center items-center gap-[4rem]'>
          { children }
        </div>
      </section>
    </main>
  )
}