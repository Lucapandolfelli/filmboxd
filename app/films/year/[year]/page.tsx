import { Suspense } from "react";
import { Film } from "types";
import ListOfFilms from "@/components/ListOfFilms";
import Loading from "./loading";

interface Props {
  params: { year: string }
}

export default async function YearPage ({ params }: Props) {
  
  return (
    
    <h1>year</h1>
  )
}

{/* <Suspense fallback={<Loading listLenght={ films.length } />}>
      <ListOfFilms films={films} />
    </Suspense> */}