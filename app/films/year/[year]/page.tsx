import ListOfFilms from "@/components/ListOfFilms";
import { Film } from "types";

const fetchFilmByYear = (year: string) => {
  return fetch(`http://localhost:3000/api/v1/films/year/${year}`, { next: { revalidate: 120 }})
    .then(res => res.json())
}

export default async function YearPages ({ params }: any) {
  const { year } = params
  const films: Film[] = await fetchFilmByYear(year)
  
  return (
    <main className='text-[#99aabb] min-h-screen'>
      <section className='w-full h-[260px] bg-center bg-cover' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('/images/login_background.jpg')` }}></section>
      <section className='py-[3rem] max-w-5xl mx-auto overflow-hidden'>
      <div className=''> 
          <h1 className='text-lg mb-1 uppercase'>{ year } Films</h1>
          <hr className='mb-[1rem] border-[#445566]'/>
          <ListOfFilms films={films} width={250} height={370} />
        </div>
      </section>
    </main>
  )
}