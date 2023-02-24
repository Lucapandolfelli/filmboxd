import Image from "next/image"
import Backdrop from "@/components/Backdrop"
import Carousel from "@/components/Carousel"
import Genres from "@/components/Genres"
import { Collection, Genre } from "types"
import { getCollectionById, getCollectionGenres, getCollectionRevenue } from "@/lib/collection/fetch"

interface Props {
  params: {
    collection_id: string
  }
}

export default async function CollectionPage ({ params: { collection_id } }: Props): Promise<JSX.Element> {
  const collection: Collection = await getCollectionById(collection_id)
  const collectionRevenue: number = await getCollectionRevenue(collection.parts)
  const collectionGenres: Genre[] = await getCollectionGenres(collection.parts)

  return (
    <main className='text-[#99aabb]'>
      <Backdrop height="large" url={`${collection?.backdrop_path}`} />
      <section className='max-w-5xl h-fit mx-auto pb-[2rem] px-[1.25rem] md:px-0 flex flex-col md:flex-row gap-[4rem] relative'>{/* bg-[#161b20] */}
        <aside className='w-full mx-[1.25rem] flex items-center'>
          <div className='w-[calc(100%_-_2.5rem)] md:min-w-[280px] md:w-[280px] absolute top-[-11rem] md:top-[-7rem] right-0 md:right-[unset] left-0 mx-auto'>
            <figure className='relative w-[150px] md:w-full h-[214px] md:h-[400px] md:mb-[2rem] shadow-xl'>
              <Image src={`https://image.tmdb.org/t/p/original/${ collection?.poster_path }`} alt={ collection?.name } fill />
            </figure>
          </div>  
        </aside>
        <div className='md:w-[680px]'>
          <div className='flex items-center sm:items-start flex-col gap-[3rem] mb-[1rem]'>
            <div className='w-full'>
              <h1 className='text-[#ffffe9] text-[2rem] font-semibold lg:text-[2.5rem] mb-[.75rem]'>{ collection?.name }</h1>
              <div className='mb-[1rem] text-[#667788]'>
                <Genres genres={ collectionGenres } />
              </div>
              {/* <h5 className='text-[#667788] mb-[2rem]'>Directed by <Link href={`/director/${ director?.id }`} className='text-[#ffffe9] hover:text-amber-600'>{ director?.name }</Link></h5> */}
              <p className='mb-[1rem] leading-[1.8]'>{ collection?.overview }</p>
              <div className='w-full mt-[2rem] mb-[1rem] font-lighter flex gap-[2.5rem] flex-wrap'>
                <span className='flex flex-col gap-[.25rem] text-[#ffffe9]'>
                  <p className='text-[#667788]'>Number of films</p>
                  { collection.parts.length } films
                </span>
                <span className='flex flex-col gap-[.25rem] text-[#ffffe9]'>
                  <p className='text-[#667788]'>Revenue</p>
                  <p>{`$${ collectionRevenue.toLocaleString() }`}</p>
                </span>
              </div> 
            </div>
          </div>
          <div className='mb-[1rem] lg:mb-[2rem]'>
            <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1rem]'>Films<small className='text-[#667788] text-sm ml-[1rem]'>{ collection.parts.length } Films</small></h3>
            <Carousel data={ collection.parts.sort((a: any, b: any) => parseInt(a.release_date) - parseInt(b.release_date)) } width={155} height={234} />
          </div>
        </div>
      </section>
      {/* <section className='max-w-5xl h-fit mx-auto pb-[4rem] px-[1.25rem] md:px-0'>
        { film?.belongs_to_collection != null && <Collection collection={ relatedFilms } /> }
        <div>
          <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1rem]'>Recommended Films</h3>
          <Carousel data={ recommendedFilms } width={155} height={234} itemPath='films' />
        </div>
      </section> */}
    </main>
  )
}