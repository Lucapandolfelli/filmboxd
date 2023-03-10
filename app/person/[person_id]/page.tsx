import Image from "next/image";
import Link from "next/link";
import ListOfFilms from "@/components/ListOfFilms";
import { getFilmsOfActorById, getFilmsOfDirectorById, getPersonById } from "@/lib/person/fetch";

interface Props {
  params: { 
    person_id: string 
  }
}

export default async function PersonDetailPage ({ params: { person_id } }: Props): Promise<JSX.Element> {
  const person = await getPersonById(person_id)
  const actorFilms = await getFilmsOfActorById(person_id)
  const directorFilms = await getFilmsOfDirectorById(person_id)

  return (
    <>
      <div className='flex items-center flex-col gap-[1rem] md:flex-row md:items-start lg:gap-[3rem]'>
        <div className='min-w-[280px] w-[280px]'>
          <figure className='relative w-full h-[400px] mb-[1rem]'>
            <Image src={`https://image.tmdb.org/t/p/original/${ person.profile_path }`} alt={ person.name } fill className='object-cover' />
          </figure>
        </div>  
        <div className='lg:w-[600px]'>
          <h1 className='text-[#ffffe9] font-semibold text-[1.5rem] lg:text-[2rem] mb-[.75rem]'>{ person.name }</h1>
          <p className='text-sm lg:text-base mb-[1rem] leading-[1.8]'>{ person.biography }</p>
          <p className='mt-[2rem] text-sm font-lighter flex gap-[.5rem]'>
            <span>More details at 
              <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={`http://www.imdb.com/title/${ person.imdb_id }/maindetails`}>IMDB</Link>
              <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={`https://www.themoviedb.org/movie/${ person.id }`}>TMDB</Link>
            </span>
          </p>
        </div>
      </div>
      <div className='my-[1rem]'>
        <h3 className='text-[1.5rem] text-[#ffffe9] font-semibold mb-[1.5rem]'>Known For</h3>
        <ListOfFilms films={ person.know_for_department === 'Acting' ? actorFilms : directorFilms } /* width={155} height={234} */ /> {/* 234px x 354px */}
      </div>
    </>
  )
}

