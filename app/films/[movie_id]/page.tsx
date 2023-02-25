import Image from "next/image"
import Link from "next/link"
import FilmInteractions from "@/components/FilmInteractions"
import Carousel from "@/components/Carousel"
import Genres from "@/components/Genres"
import { getFilmById, getFilmListByMovieId, getRelatedFilms } from "@/lib/films/fetch"
import { getCastByMovieId, getCrewByMovieId, getDirectorByMovieId } from "@/lib/person/fetch"
import Backdrop from "@/components/Backdrop"
import Collection from "@/components/Collection"
import { getCollectionById } from "@/lib/collection/fetch"
import { Film, FilmResult } from "types"
import FilmInformation from "@/components/FilmInformation"

interface Props {
  params: { 
    movie_id: string 
  }
}

export default async function FilmDetailPage ({ params: { movie_id } }: Props): Promise<JSX.Element> {
  const film: Film = await getFilmById(movie_id)
  const cast = await getCastByMovieId(movie_id)
  const crew = await getCrewByMovieId(movie_id)
  const recommendedFilms: FilmResult[] = await getRelatedFilms(movie_id)
  const director = await getDirectorByMovieId(movie_id)
  const lists = await getFilmListByMovieId(movie_id)
  let relatedFilms
  
  if (film.belongs_to_collection != null){
    relatedFilms = await getCollectionById(film?.belongs_to_collection.id.toString())
  }

  return (
    <main className='text-[#99aabb]'>
      <Backdrop height="large" url={`${film?.backdrop_path}`} />
      <section className='max-w-5xl h-fit mx-auto pb-[2rem] px-[1.25rem] md:px-0 flex flex-col md:flex-row gap-[4rem] relative'>{/* bg-[#161b20] */}
        <aside className='w-[280px] mx-[1.25rem] flex items-center'>
          <div className='w-[calc(100%_-_2.5rem)] md:min-w-[280px] md:w-[280px] absolute top-[-11rem] md:top-[-7rem] right-0 md:right-[unset] left-0 mx-auto'>
            <figure className='relative w-[150px] md:w-full h-[214px] md:h-[400px] md:mb-[2rem] shadow-xl'>
              {
                film?.poster_path ?
                <Image src={`https://image.tmdb.org/t/p/original/${ film?.poster_path }`} alt={ film?.title } fill /> :
                <Image src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`} alt={ film?.title } fill className='bg-[#dbdbdb]' />
              }
            </figure>
            <div className='hidden sm:flex flex-col items-center gap-[1rem]'>
              <FilmInteractions initialAverage={ film?.vote_average.toString() } initialViews={'0'} initialLikes={'0'} initialSaves={ lists } initialRating={ film?.vote_count.toString() } />
            </div>
          </div>  
        </aside>
        <div className='max-w-[680px] w-full'>
          <div className='flex items-center sm:items-start flex-col gap-[3rem] mb-[3rem]'>
            <div className='w-full'>
              <small className='inline-block text-lg text-[#667788] mb-[1rem]'>{ film?.release_date.substr(0,4) }</small>
              <h1 className='text-[#ffffe9] text-[2rem] font-semibold lg:text-[2.5rem] mb-[2rem] leading-[1]'>{ film?.title }</h1>
              <h5 className='text-[#667788] mb-[2rem]'>Directed by <Link href={`/person/${ director?.id }`} className='text-[#ffffe9] hover:text-amber-600'>{ director?.name }</Link></h5>
              <h6 className='text-[#667788] font-semibold uppercase mb-[1rem]'>{ film?.tagline }</h6>
              <p className='mb-[1rem] leading-[1.8]'>{ film?.overview }</p>
            </div>
          </div>
          <div className='sm:hidden flex flex-col items-center gap-[1rem] mb-[2rem]'>
            <FilmInteractions initialAverage={ Number.parseFloat(film?.vote_average.toString()).toFixed(1) } initialViews={'0'} initialLikes={'0'} initialSaves={ lists } initialRating={ film?.vote_count.toString() } />
          </div>
          <FilmInformation film={film} cast={cast} crew={crew} />
        </div>
      </section>
      <section className='max-w-5xl h-fit mx-auto pb-[4rem] px-[1.25rem] md:px-0'>
        { film?.belongs_to_collection != null && <Collection collection={ relatedFilms } /> }
        <div>
          <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1rem]'>Recommended Films</h3>
          <Carousel data={ recommendedFilms } width={155} height={234} />
        </div>
      </section>
    </main>
  )
}