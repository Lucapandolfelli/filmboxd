export default async function Layout ({ children, params }: { children: React.ReactNode, params: any }) {
  const { year } = params
  
  return (
    <main className='text-[#99aabb] min-h-screen'>
      <section className='w-full h-[260px] bg-center bg-cover' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('/images/login_background.jpg')` }}></section>
      <section className='py-[3rem] max-w-5xl mx-auto overflow-hidden'>
        <div> 
          <h1 className='text-lg mb-1 uppercase'>{ year } Films</h1>
          <hr className='mb-[1rem] border-[#445566]'/>
          { children }
        </div>
      </section>
    </main>
  )
}