import ListOfFilms from "@/components/ListOfFilms"
import { searchMovie } from "@/lib/films/fetch"
import { FilmResult } from "types"

interface Props {
  params: {
    query: string
  }
}

export default async function SearchPage ({ params: { query } }: Props): Promise<JSX.Element> {
  const searchResults: FilmResult[] = await searchMovie(query)

  return (
    <div className='mb-[3rem]'> 
      <h1 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Results for {`"${ query.replace('%20', ' ') }"`}</h1>
      <ListOfFilms films={searchResults} />
    </div>
  )
}