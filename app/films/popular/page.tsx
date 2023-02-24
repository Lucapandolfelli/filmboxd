import ListOfFilms from "@/components/ListOfFilms";
import { getPopularFilms } from "@/lib/films/fetch";
import { FilmResult } from "types";

export default async function PopularFilmsPage (): Promise<JSX.Element> {
  const popularFilms: FilmResult[] = await getPopularFilms()
  
  return (
    <div className='mb-[3rem]'> 
      <h1 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Popular Films</h1>
      <ListOfFilms films={popularFilms} />
    </div>
  )
}