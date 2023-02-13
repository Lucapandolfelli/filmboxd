import ListOfFilms from "@/components/ListOfFilms";
import Image from "next/image";
import Link from "next/link";
import { Actor, Film } from "types";

const getAllFilms = async (): Promise<Film[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_HOST }/api/v1/films`, { cache: "no-store" });
  return await res.json();
};

const getActorBySlug = async (slug: string): Promise<Actor> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_HOST }/api/v1/actor/${slug}`, { cache: "no-store" });
  return res.json();
};

export default async function DirectorDetailPage ({ params }: { params: { slug: string }}) {
  const { slug } = params
  const actor: Actor = await getActorBySlug(slug)
  const films: Film[] = await getAllFilms()

  return (
    <>
      <div className='flex items-center flex-col gap-[1rem] lg:flex-row lg:items-start lg:gap-[3rem]'>
        <div className='min-w-[280px] w-[280px]'>
          <div className='relative w-full h-[400px] mb-[1rem]'>
            <Image src={`/images/actors/${ actor.thumbnail }`} alt={ actor.name } fill />
          </div>
        </div>  
        <div className='lg:w-[600px]'>
          <h1 className='text-[#ffffe9] text-[1.5rem] lg:text-[2rem] mb-[.75rem]'>{ actor.name }</h1>
          <p className='text-sm lg:text-base mb-[1rem] leading-[1.8]'>{ actor.biography }</p>
          <p className='mt-[2rem] text-sm font-lighter flex gap-[.5rem]'>
            <span>More details at 
              <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={ actor.tmdb_link }>TMDB</Link>
            </span>
          </p>
        </div>
      </div>
      <div className='my-[1rem]'>
      <h3 className='text-[1.5rem] text-[#ffffe9] font-semibold mb-[1.5rem]'>Known For</h3>
        <ListOfFilms films={ films } width={250} height={370} />
      </div>
    </>
  )
}