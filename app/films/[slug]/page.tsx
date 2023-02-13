import Image from "next/image"
import FilmInteractions from "@/components/FilmInteractions"
import CastList from "@/components/CastList"
import Link from "next/link"
import ReviewsList from "@/components/ReviewsList"
import Carousel from "@/components/Carousel"
import { Actor, Director, Film, Review } from "types"
 
const fetchFilmBySlug = async (slug: string): Promise<Film> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_HOST }/api/v1/films/${slug}`);
  return await res.json();
};

const fetchAllFilms = async (): Promise<Film[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_HOST }/api/v1/films`);
  return await res.json();
};

export default async function FilmDetailPage ({ params }: { params: { slug: string }}) {
  const { slug } = params
  const film: Film = await fetchFilmBySlug(slug)
  const films: Film[] = await fetchAllFilms()
  const director: Director = film.directors[0]

  return (
    <main className='text-[#99aabb]'>
      <section className='w-full h-[560px] bg-center bg-cover relative' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,24,28,1) 2%, rgba(20,24,28,0.725910432532388) 18%, rgba(20,24,28,0.01162471824667366) 100%), url('/images/films/${ film.background_thumbnail }')` }}></section>
      <section className='max-w-5xl h-fit mx-auto pb-[4rem] px-[1.25rem] md:px-0 flex flex-col md:flex-row gap-[4rem] relative'>{/* bg-[#161b20] */}
        <aside className='w-full mx-[1.25rem] flex items-center'>
          <div className='w-[calc(100%_-_2.5rem)] md:min-w-[280px] md:w-[280px] absolute top-[-12rem] md:top-[-7rem] right-0 md:right-[unset] left-0 mx-auto'>
            <div className='relative w-[150px] md:w-full h-[214px] md:h-[400px] mb-[2rem] shadow-xl'>
              <Image src={`/images/films/${ film?.thubmnail }`} alt={ film.title } fill />
            </div>
            <div className='flex flex-col items-center gap-[1rem]'>
              <FilmInteractions />
            </div>
          </div>  
        </aside>
        <div className='md:w-[680px] mt-[20rem] md:mt-0'>
          <div className='flex items-center sm:items-start flex-col gap-[1rem] lg:gap-[3rem] mb-[1rem]'>
            <div className='w-full'>
              <small className='text-lg text-[#667788]'><Link className='hover:text-amber-600' href={'/films/year/[year]'} as={`/films/year/${ film.year }`}>{ film?.year }</Link></small>
              <h1 className='text-[#ffffe9] text-[2rem] font-semibold lg:text-[2.5rem] mb-[.75rem]'>{ film?.title }</h1>
              <h5 className='text-[#667788] mb-[.75rem]'>Directed by <Link href={`/director/${ director.slug }`} className='text-[#ffffe9] hover:text-amber-600'>{ director.name }</Link></h5>
              <p className='mb-[1rem] leading-[1.8]'>{ film?.synopsis }</p>
              <div className='w-full mt-[2rem] mb-[1rem] font-lighter flex gap-[1.25rem] flex-wrap'>
                <span className='flex gap-[.5rem] text-[#ffffe9]'>
                  <p className='text-[#667788]'>Duration</p>
                  { film.runtime } mins
                </span>
                <span className='flex gap-[.5rem] text-[#ffffe9]'>
                  <p className='text-[#667788]'>Released</p>
                  5 January 2023
                </span>
                <span>More at 
                  <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={ film.imdb_link }>IMBD</Link> 
                  <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={ film.tmdb_link }>TMDB</Link>
                </span>
              </div> 
            </div>
          </div>
          <div className='mb-[1rem] lg:mb-[2rem]'>
            <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Cast</h3>
            <Carousel data={ films.filter((film) => film.slug != slug) } width={155} height={234} /> {/* 230px x 350px */}
          </div>
          {/* Reviews section */}
          <div className='mb-[1rem] lg:mb-[2rem]'>
            <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[1rem] md:mb-[2rem]'>Popular Reviews</h3>
            <ReviewsList reviews={ film.reviews.slice(0, 3).sort((a: Review, b: Review) => b.likes - a.likes) } />
          </div>
            { film.reviews.length > 0
            ? <div className='mb-[1rem] lg:mb-[2rem]'>
                <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[2rem]'>Recent Reviews</h3>
                <ReviewsList reviews={ film.reviews.slice(0, 2).sort((a: Review, b: Review) => b.publish_date - a.publish_date) } />
              </div>
            : ''}
          {/* Related Films section */}
          <div>
            <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Related Films</h3>
            <Carousel data={ films.filter((film) => film.slug != slug) } width={155} height={234} /> {/* 230px x 350px */}
          </div>
        </div>
      </section>
    </main>
  )
}