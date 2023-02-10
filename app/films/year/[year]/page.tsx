import { Suspense } from "react";
import { Film } from "types";
import ListOfFilms from "@/components/ListOfFilms";
import Loading from "./loading";
import { fetchFilmsByYear } from "@/services/films";

export default async function YearPages ({ params }: any) {
  const { year } = params
  const films: Film[] = await fetchFilmsByYear(year)
  
  return (
    <Suspense fallback={<Loading listLenght={ films.length } />}>
      <ListOfFilms films={films} width={250} height={370} />
    </Suspense>
  )
}