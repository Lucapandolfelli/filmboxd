import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import { getCompleteFilmsData, getTrendingFilms, getNowPlayingFilms } from "@/lib/films/fetch";
import { FilmResult } from "types";

export default async function HomePage (): Promise<JSX.Element> {
  const trendingFilms: FilmResult[] = await getTrendingFilms()
  const nowPlayingFilms: FilmResult[] = await getNowPlayingFilms()
  const films = await getCompleteFilmsData(trendingFilms.map((film: any) => film.id))
  
  return (
    <main>
      <Hero films={films} />
      <section className='py-[3rem] max-w-5xl mx-auto overflow-hidden px-[1.25rem]'>
        <div className='mb-[3rem]'> 
          <div className='flex items-center gap-[1rem]'>
            <h2 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Trending</h2>
            <div className='flex gap-[.5rem]'>
              <button className='bg-[#14181c] border-[2px] border-[#00e054] h-fit text-[.65rem] text-[#00e054] font-bold uppercase rounded-[1rem] px-[.75rem] py-[.25rem]'>Today</button>
              <button className='bg-[#14181c] border-[2px] border-[#00e054] h-fit text-[.65rem] text-[#00e054] font-bold uppercase rounded-[1rem] px-[.75rem] py-[.25rem]'>This Week</button>
            </div>
          </div>
          <Carousel data={trendingFilms} width={245} height={365} />
        </div>
        <div> 
          <h2 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Now Playing</h2>
          <Carousel data={nowPlayingFilms} width={245} height={365} />
        </div>
      </section>
    </main>
  )
}