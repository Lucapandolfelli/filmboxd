import { Suspense } from "react";
import ListOfFilms from "@/components/ListOfFilms";
import Loading from "./loading";
import { getFilmsByGenreId } from "@/lib/films/fetch";

interface Props {
  params: { 
    id: string 
  }
}

export default async function GenresPage ({ params: { id } }: Props) {
  const films = await getFilmsByGenreId(id)
  
  return (
    <Suspense fallback={<Loading listLenght={ films.length } />}>
      <ListOfFilms films={films} />
    </Suspense>
  )
}