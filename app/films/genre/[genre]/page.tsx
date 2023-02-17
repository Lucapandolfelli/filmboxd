import { Suspense } from "react";
import { Film } from "types";
import ListOfFilms from "@/components/ListOfFilms";
import Loading from "./loading";

const getFilmsByGender = async (genre: string): Promise<Film[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_HOST }/api/v1/films/genre/${genre}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

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