import CarouselOfFilms from "@/components/CarouselOfFilms";
import { Film } from "types";

const getFilmsByYear = async (year: string) => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_HOST }/api/v1/films/year/${year}`, { cache: "no-store" });
  return res.json();
}

const getAllFilms = async () => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_HOST }/api/v1/films`, { cache: "no-store" });
  return res.json();
}

export default async function FilmsPage () {
  const films: Film[] = await getAllFilms()
  const newestFilms: Film[] = await getFilmsByYear('2023')

  return (
    <main className='text-[#99aabb] min-h-screen'>
      <section className='w-full h-[260px] bg-center bg-cover' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('/images/login_background.jpg')` }}></section>
      <section className='py-[3rem] max-w-5xl mx-auto overflow-hidden'>
        <div className='mb-[3rem]'> 
          <h2 className='text-lg mb-1 uppercase'>Newest Films</h2>
          <hr className='mb-[1rem] border-[#445566]'/>
          <CarouselOfFilms films={newestFilms} width={245} height={365} />
        </div>
        <div> 
          <h2 className='text-lg mb-1 uppercase'>Popular Films</h2>
          <hr className='mb-[1rem] border-[#445566]'/>
          <CarouselOfFilms films={films} width={245} height={365} />
        </div>
      </section>
    </main>
  )
}