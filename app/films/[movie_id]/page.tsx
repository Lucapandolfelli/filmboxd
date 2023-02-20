import Image from "next/image"
import Link from "next/link"
import { Actor, Director, Film, Review } from "types"
import FilmInteractions from "@/components/FilmInteractions"
import ReviewsList from "@/components/ReviewsList"
import Carousel from "@/components/Carousel"
import Genres from "@/components/Genres"
import { getFilmById, getRelatedFilms, getReviewsByMovieId } from "@/lib/films/utils"
import { getCastByMovieId } from "@/lib/actor/utils"
import { getDirectorByMovieId } from "@/lib/director/utils"

interface Props {
  params: { movie_id: string }
}

export default async function FilmDetailPage ({ params: { movie_id } }: Props) {
  const film = await getFilmById(movie_id)
  const cast = await getCastByMovieId(movie_id)
  const reviews = await getReviewsByMovieId(movie_id)
  const relatedFilms = await getRelatedFilms(movie_id)
  const director = await getDirectorByMovieId(movie_id)

  return (
    <main className='text-[#99aabb]'>
      <section className='w-full h-[460px] md:h-[560px] bg-center bg-cover relative' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,24,28,1) 2%, rgba(20,24,28,0.725910432532388) 18%, rgba(20,24,28,0.01162471824667366) 100%), url('https://image.tmdb.org/t/p/original/${ film?.backdrop_path }')` }}></section>
      <section className='max-w-5xl h-fit mx-auto pb-[4rem] px-[1.25rem] md:px-0 flex flex-col md:flex-row gap-[4rem] relative'>{/* bg-[#161b20] */}
        <aside className='w-full mx-[1.25rem] flex items-center'>
          <div className='w-[calc(100%_-_2.5rem)] md:min-w-[280px] md:w-[280px] absolute top-[-11rem] md:top-[-7rem] right-0 md:right-[unset] left-0 mx-auto'>
            <div className='relative w-[150px] md:w-full h-[214px] md:h-[400px] md:mb-[2rem] shadow-xl'>
              <Image src={`https://image.tmdb.org/t/p/original/${ film?.poster_path }`} alt={ film?.title } fill />
            </div>
            <div className='hidden sm:flex flex-col items-center gap-[1rem]'>
              <FilmInteractions initialViews={0} initialLikes={0} initialSaves={0} initialRating={0} />
            </div>
          </div>  
        </aside>
        <div className='md:w-[680px]'>
          <div className='flex items-center sm:items-start flex-col gap-[3rem] mb-[1rem]'>
            <div className='w-full'>
              <small className='text-lg text-[#667788]'>{ film?.release_date.substr(0,4) }</small>
              <h1 className='text-[#ffffe9] text-[2rem] font-semibold lg:text-[2.5rem] mb-[.75rem]'>{ film?.title }</h1>
              <h5 className='text-[#667788] mb-[.75rem]'>Directed by <Link href={`/director/${ director?.id }`} className='text-[#ffffe9] hover:text-amber-600'>{ director?.name }</Link></h5>
              <p className='mb-[1rem] leading-[1.8]'>{ film?.overview }</p>
              {/* <Genres genres={ film?.genres } /> */}
              <div className='w-full mt-[2rem] mb-[1rem] font-lighter flex gap-[1.25rem] flex-wrap'>
                <span className='flex gap-[.5rem] text-[#ffffe9]'>
                  <p className='text-[#667788]'>Duration</p>
                  { film.runtime } mins
                </span>
                <span className='flex gap-[.5rem] text-[#ffffe9]'>
                  <p className='text-[#667788]'>Released</p>
                  <p>{ film?.release_date }</p>
                </span>
                <span>More at 
                  <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={`http://www.imdb.com/title/${ film?.imdb_id }/maindetails`}>IMBD</Link> 
                  <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={`https://www.themoviedb.org/movie/${ film?.id }`}>TMDB</Link>
                </span>
              </div> 
            </div>
          </div>
          <div className='sm:hidden flex flex-col items-center gap-[1rem] mb-[2rem]'>
            <FilmInteractions initialViews={0} initialLikes={0} initialSaves={0} initialRating={0} />
          </div>
          <div className='mb-[1rem] lg:mb-[2rem]'>
            <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Cast</h3>
            <Carousel data={ cast } width={155} height={234} itemPath='actor' />
          </div>
          <div className='mb-[1rem] lg:mb-[2rem]'>
            <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[1rem] md:mb-[1.25rem]'>Reviews</h3>
            <ReviewsList reviews={ reviews } />
          </div>
          <div>
            <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Related Films</h3>
            <Carousel data={ relatedFilms } width={155} height={234} itemPath='films' />
          </div>
        </div>
      </section>
    </main>
  )
}