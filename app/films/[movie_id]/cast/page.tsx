import Backdrop from "@/components/Backdrop"
import Carousel from "@/components/Carousel"
import { getCastByMovieId, getCrewByMovieId } from "@/lib/person/fetch"
import { getFilmById } from "@/lib/films/fetch"

interface Props {
  params: {
    movie_id: string
  }
}

export default async function CastPage ({ params: { movie_id } }: Props) {
  const cast = await getCastByMovieId(movie_id)
  const crew = await getCrewByMovieId(movie_id)
  const { title, release_date, backdrop_path } = await getFilmById(movie_id)

  return (
    <main className='text-[#99aabb]'>
      <Backdrop height='large' url={ backdrop_path } />
      <section className='max-w-5xl mx-auto px-[1.25rem] md:px-0 flex flex-col md:flex-row gap-[4rem] relative'>
        <h1 className='text-[#ffffe9] text-[2rem] pt-[1rem] font-semibold lg:text-[2.5rem] mb-[2rem]'>{`${ title } (${ release_date.substr(0,4) }) - Cast & Crew`}</h1>
      </section>
      <section className='max-w-5xl mx-auto pb-[2rem] px-[1.25rem] md:px-0'>
        <div className='mb-[1rem] lg:mb-[2rem]'>
          <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1rem]'>Cast<small className='text-[#667788] text-sm ml-[1rem]'>{ cast.length } Actors</small></h3>
          <Carousel data={ cast } width={155} height={234} />
        </div>
        <div className='mb-[1rem] lg:mb-[2rem]'>
          <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1rem]'>Crew<small className='text-[#667788] text-sm ml-[1rem]'>{ crew.length } Members</small></h3>
          <Carousel data={ crew } width={155} height={234} />
        </div>
      </section>
    </main>
  )
}