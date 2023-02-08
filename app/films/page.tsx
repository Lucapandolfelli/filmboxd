import ListOfFilms from "@/components/ListOfFilms";
import { Film } from "types";

const fetchAllFilms = (): Promise<Film[]> => {
  return fetch('http://localhost:3000/api/v1/films', { next: { revalidate: 120 } })
    .then(res => res.json());
}

const fetchNewestFilms = (year: number): Promise<Film[]> => {
  return fetch(`http://localhost:3000/api/v1/films/year/${ year }`, { next: { revalidate: 120 } })
    .then(res => res.json());
}

export default async function FilmsPage () {
  const films: Film[] = await fetchAllFilms()
  const newestFilms: Film[] = await fetchNewestFilms(2023)

  return (
    <main className='text-[#99aabb] min-h-screen'>
      <section className='w-full h-[360px] bg-center bg-cover' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('/images/login_background.jpg')` }}></section>
      <section className='py-[3rem] max-w-5xl mx-auto overflow-hidden'>
        <div className='mb-[3rem]'> 
          <h1 className='text-lg mb-1 uppercase'>Newest Films</h1>
          <hr className='mb-[1rem] border-[#445566]'/>
          <ListOfFilms films={newestFilms} />
        </div>
        <div className=''> 
          <h1 className='text-lg mb-1 uppercase'>Popular Films</h1>
          <hr className='mb-[1rem] border-[#445566]'/>
          <ListOfFilms films={films} />
        </div>
      </section>
    </main>
  )
}