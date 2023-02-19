import { Suspense } from "react";
import { Film } from "types";
import ListOfFilms from "@/components/ListOfFilms";
import Loading from "./loading";
import { getFilmsByGender } from "@/lib/films/utils";

interface Props {
  params: { genre: string }
}

export default async function GenresPage ({ params }: Props) {
  const films: Film[] = await getFilmsByGender(params.genre)
  
  return (
    <Suspense fallback={<Loading listLenght={ films.length } />}>
      <ListOfFilms films={films} />
    </Suspense>
  )
}