import Image from "next/image";
import Link from "next/link";
import ListOfFilms from "@/components/ListOfFilms";
import { getDirectorBySlug } from "@/lib/director/utils";
import { getAllFilms } from "@/lib/films/utils";
import { Director, Film } from "types";

interface Props {
  params: { slug: string }
}

export default async function DirectorDetailPage ({ params }: Props) {
  const director: Director = await getDirectorBySlug(params.slug)
  const films: Film[] = await getAllFilms()

  return (
    <>
      <div className='flex items-center flex-col gap-[1rem] md:flex-row md:items-start lg:gap-[3rem]'>
        <div className='min-w-[280px] w-[280px]'>
          <div className='relative w-full h-[400px] mb-[1rem]'>
            <Image src={`/images/directors/${ director.thumbnail }`} alt={ director.name } fill className='object-cover' />
          </div>
        </div>  
        <div className='lg:w-[600px]'>
          <h1 className='text-[#ffffe9] font-semibold text-[1.5rem] lg:text-[2rem] mb-[.75rem]'>{ director.name }</h1>
          <p className='text-sm lg:text-base mb-[1rem] leading-[1.8]'>{ director.biography }</p>
          <p className='mt-[2rem] text-sm font-lighter flex gap-[.5rem]'>
            <span>More details at 
              <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={ director.tmdb_link }>TMDB</Link>
            </span>
          </p>
        </div>
      </div>
      <div className='my-[1rem]'>
        <h3 className='text-[1.5rem] text-[#ffffe9] font-semibold mb-[1.5rem]'>Known For</h3>
        <ListOfFilms films={ films } /* width={155} height={234} */ /> {/* 234px x 354px */}
      </div>
    </>
  )
}

