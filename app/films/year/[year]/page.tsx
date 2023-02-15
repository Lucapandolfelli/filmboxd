import { Suspense } from "react";
import { Film } from "types";
import ListOfFilms from "@/components/ListOfFilms";
import Loading from "./loading";

const fetchFilmsByYear = async (year: string): Promise<Film[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_HOST }/api/v1/films/year/${year}`, { cache: "no-store" });
  return await res.json();
};

export default async function YearPages ({ params }: { params: { year: string } }) {
  const { year } = params
  const films: Film[] = await fetchFilmsByYear(year)
  
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