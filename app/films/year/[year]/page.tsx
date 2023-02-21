import { Suspense } from "react";
import { Film } from "types";
import ListOfFilms from "@/components/ListOfFilms";
import Loading from "./loading";
import { getFilmsByYear } from "@/lib/films/fetch";

interface Props {
  params: { year: string }
}

export default async function YearPage ({ params }: Props) {
  const films: Film[] = await getFilmsByYear(params.year)
  
  return (
    <Suspense fallback={<Loading listLenght={ films.length } />}>
      <ListOfFilms films={films} />
    </Suspense>
  )
}