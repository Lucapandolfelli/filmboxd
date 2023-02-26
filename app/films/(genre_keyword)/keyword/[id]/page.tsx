import { Suspense } from "react";
import ListOfFilms from "@/components/ListOfFilms";
import Loading from "./loading";
import { getFilmsByKeyword } from "@/lib/keyword/fetch";

interface Props {
  params: { 
    id: string 
  }
}

export default async function KeywordPage ({ params: { id } }: Props): Promise<JSX.Element> {
  const films = await getFilmsByKeyword(id)
  
  return (
    <Suspense fallback={<Loading listLenght={ films.length } />}>
      <ListOfFilms films={films} />
    </Suspense>
  )
}