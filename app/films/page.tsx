import Carousel from "@/components/Carousel";
import { getAllFilms, getFilmsByYear } from "@/lib/films/utils";
import { Film } from "types";

export default async function FilmsPage () {
  const films: Film[] = await getAllFilms()
  const newestFilms: Film[] = await getFilmsByYear('2023')

  return (
    <main className='text-[#99aabb] min-h-screen'>
      <section className='w-full h-[160px] bg-center bg-cover' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,24,28,1) 2%, rgba(20,24,28,0.725910432532388) 18%, rgba(20,24,28,0.01162471824667366) 100%), url('/images/login_background.jpg')` }}></section>
      <section className='py-[3rem] max-w-5xl mx-auto overflow-hidden'>
        <div className='mb-[3rem]'> 
          <h2 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Newest Films</h2>
          <Carousel data={newestFilms} width={245} height={365} itemPath='films' />
        </div>
        <div> 
          <h2 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Popular Films</h2>
          <Carousel data={films} width={245} height={365} itemPath='films' />
        </div>
      </section>
    </main>
  )
}