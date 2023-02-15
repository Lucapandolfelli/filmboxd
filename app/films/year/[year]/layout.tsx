export default async function Layout ({ children, params }: { children: React.ReactNode, params: any }) {
  const { year } = params
  
  return (
    <main className='text-[#99aabb] min-h-screen'>
      <section className='w-full h-[260px] bg-center bg-cover' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,24,28,1) 2%, rgba(20,24,28,0.725910432532388) 18%, rgba(20,24,28,0.01162471824667366) 100%), url('/images/login_background.jpg')` }}></section>
      <section className='py-[3rem] max-w-5xl mx-auto overflow-hidden'>
        <div> 
          <h1 className='text-[1.5rem] md:text-[2rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>{ year } Films</h1>
          { children }
        </div>
      </section>
    </main>
  )
}