import ListOfFilms from "@/components/ListOfFilms";
import { getActorById, getFilmsOfActorById } from "@/lib/actor/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { person_id: string }
}

export default async function ActorDetailPage ({ params: { person_id } }: Props) {
  const actor = await getActorById(person_id)
  const films = await getFilmsOfActorById(person_id)

  return (
    <>
      <div className='flex items-center flex-col gap-[1rem] lg:flex-row lg:items-start lg:gap-[3rem]'>
        <div className='min-w-[280px] w-[280px]'>
          <div className='relative w-full h-[400px] mb-[1rem]'>
            <Image src={`https://image.tmdb.org/t/p/original/${ actor?.profile_path }`} alt={ actor?.name } fill className='object-cover' />
          </div>
        </div>  
        <div className='lg:w-[600px]'>
          <h1 className='text-[#ffffe9] font-semibold text-[1.5rem] lg:text-[2rem] mb-[.75rem]'>{ actor?.name }</h1>
          <p className='mb-[1rem] leading-[1.8]'>{ actor?.biography }</p>
          <p className='mt-[2rem] text-sm font-lighter flex gap-[.5rem]'>
            <span>More details at 
              <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={`https://www.themoviedb.org/person/${ actor?.id }`}>TMDB</Link>
            </span>
          </p>
        </div>
      </div>
      <div className='my-[1rem]'>
        <h3 className='text-[1.25rem] md:text-[1.5rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1.25rem]'>Known For</h3>
        <ListOfFilms films={ films }/>
      </div>
    </>
  )
}