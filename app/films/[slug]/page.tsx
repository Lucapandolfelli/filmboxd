import Image from "next/image"
import FilmInteractions from "@/components/FilmInteractions"
import CastList from "@/components/CastList"
import Link from "next/link"
import ReviewsList from "@/components/ReviewsList"

const fetchFilmBySlug = (slug: string) => {
  return fetch(`http://localhost:3000/api/v1/films/${slug}`, { next: { revalidate: 120 }})
    .then(res => res.json())
}

export default async function FilmDetailPage ({ params }: any) {
  const { slug } = params
  const film = await fetchFilmBySlug(slug)

  return (
    <main className='text-[#99aabb] relative'>
      <section className='w-full h-[560px] bg-center bg-cover' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/images/${ film.background_thumbnail }')` }}></section>
      <section className='bg-[#161b20] max-w-5xl h-fit mx-auto p-[2rem] flex flex-col gap-[1rem] absolute top-[300px] left-0 right-0 shadow-md'>
        <div className='flex gap-[3rem]'>
          <div className='w-[280px]'>
            <div className='relative w-full h-[400px] mb-[1rem]'>
              <Image src={`/images/${ film?.thubmnail }`} alt={ film.title } fill />
            </div>
            <FilmInteractions />
          </div>  
          <div className='w-[600px]'>
            <h1 className='text-[#ffffe9] text-[2rem] mb-[.75rem]'>{ film?.title } (<Link className='underline px-[.25rem] transition-all duration-300 ease-linear hover:text-[#99aabb]' href={'/films/year/[year]'} as={`/films/year/${ film.year }`}>{ film?.year }</Link>)</h1>
            <h5 className='text-lg mb-[1.25rem]'>Directed by <span className='text-[#ffffe9]'>{ film?.directors }</span></h5>
            <p className='mb-[1rem]'>{ film?.synopsis }</p>
            <h3 className='uppercase mb-[.75rem]'>Cast</h3>
            <CastList cast={ film.cast } />
            <p className='mt-[2rem] text-sm font-lighter flex gap-[.5rem]'>
              <span>{ film.runtime } mins</span>
              <span>More at 
                <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={ film.imdb_link }>IMBD</Link> 
                <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={ film.tmdb_link }>TMDB</Link>
              </span>
            </p> 
          </div>
        </div>
        <hr className='border-[#445566] my-[3rem]' />
        <div>
          <h3 className='uppercase mb-1'>Popular Reviews</h3>
          <hr className='mb-[1rem] border-[#445566]'/>
          <ReviewsList reviews={ film.reviews } />
        </div>
      </section>
    </main>
  )
}