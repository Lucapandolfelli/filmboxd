import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import { getCompleteFilmsData, getTrendingFilms, getNowPlayingFilms } from "@/lib/films/fetch";

export default async function HomePage () {
  const trendingFilms = await getTrendingFilms()
  const nowPlayingFilms = await getNowPlayingFilms()
  const films = await getCompleteFilmsData(trendingFilms.map((film: any) => film.id))
  
  return (
    <main>
      <Hero films={films} />
      <section className='py-[3rem] max-w-5xl mx-auto overflow-hidden'>
        <div className='mb-[3rem]'> 
          <h2 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Trending Films</h2>
          <Carousel data={trendingFilms} width={245} height={365} />
        </div>
        <div> 
          <h2 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Now Playing Films</h2>
          <Carousel data={nowPlayingFilms} width={245} height={365} />
        </div>
      </section>
    </main>
  )
}