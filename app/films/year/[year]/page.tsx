import { Suspense } from "react";
import { FilmResult } from "types";
import ListOfFilms from "@/components/ListOfFilms";
import Loading from "./loading";
import { getFilmsByYear } from "@/lib/films/fetch";

interface Props {
  params: { year: string }
}

export default async function YearPage ({ params: { year } }: Props) {
  const films: FilmResult[] = await getFilmsByYear(Number(year))
  return (
    <Suspense fallback={<Loading listLenght={ films.length } />}>
      <ListOfFilms films={films} />
    </Suspense>
  )
}
