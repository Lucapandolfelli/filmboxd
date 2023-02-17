import { Suspense } from "react";
import { Film } from "types";
import ListOfFilms from "@/components/ListOfFilms";
import Loading from "./loading";
import { getFilmsByGender } from "@/lib/films/utils";

export default async function GenresPage ({ params }: { params: { genre: string } }) {
  const { genre } = params
  const films: Film[] = await getFilmsByGender(genre)
  
  return (
    <Suspense fallback={<Loading listLenght={ films.length } />}>
      <div className=''>
        <ListOfFilms films={films} /* width={165} height={244} */ /> 
      </div>
      {/* <div className='hidden sm:block'>
        <ListOfFilms films={films} width={250} height={370} /> 
      </div> */}
    </Suspense>
  )
}