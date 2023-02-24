interface Props {
  children: React.ReactNode, 
}

export default async function Layout ({ children }: Props): Promise<JSX.Element> {
  return (
    <main className='text-[#99aabb] min-h-screen'>
      <section className='w-full h-[160px] bg-center bg-cover' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,24,28,1) 2%, rgba(20,24,28,0.725910432532388) 18%, rgba(20,24,28,0.01162471824667366) 100%), url('/images/login_background.jpg')` }}></section>
      <section className='px-[1.25rem] md:px-0 pt-[1rem] pb-[3rem] md:pt-[3rem] max-w-5xl mx-auto overflow-hidden'>
      { children }
      </section>
    </main>
  )
}