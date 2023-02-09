export default function HomePage () {
  return (
    <main>
      <section className='w-full h-[360px] bg-center bg-cover' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('/images/login_background.jpg')` }}></section>
      <section className='max-w-5xl mx-auto'>
        <h1>Home</h1>
      </section>
    </main>
  )
}