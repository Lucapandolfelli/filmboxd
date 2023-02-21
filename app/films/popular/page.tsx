import Carousel from "@/components/Carousel";
import { getPopularFilms } from "@/lib/films/fetch";

export default async function PopularFilmsPage () {
  const popularFilms = await getPopularFilms()
  
  return (
    <div className='mb-[3rem]'> 
      <h2 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Popular Films</h2>
      <Carousel data={popularFilms} width={245} height={365} />
    </div>
  )
}