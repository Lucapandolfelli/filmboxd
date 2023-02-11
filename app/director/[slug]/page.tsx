import ListOfFilms from "@/components/ListOfFilms";
import Image from "next/image";
import Link from "next/link";
import { Director, Film } from "types";

const fecthDirectorBySlug = async (slug: string): Promise<Director> => {
  const res = await fetch(`http://localhost:3000/api/v1/director/${slug}`, { cache: "no-store" });
  return res.json();
};

const fetchAllFilms = async (): Promise<Film[]> => {
  const res = await fetch('http://localhost:3000/api/v1/films', { cache: "no-store" });
  return await res.json();
}

export default async function DirectorDetailPage ({ params }: any) {
  const { slug } = params
  const director: Director = await fecthDirectorBySlug(slug)
  const films = await fetchAllFilms()

  return (
    <main className='text-[#99aabb]'>
      <section className='w-full h-[160px] bg-center bg-cover' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('/images/login_background.jpg')` }}></section>
      <section className='bg-[#161b20] max-w-5xl h-fit mx-auto p-[2rem] flex flex-col gap-[1rem] shadow-md'>
        <div className='flex gap-[3rem]'>
          <div className='min-w-[280px] w-[280px]'>
            <div className='relative w-full h-[400px] mb-[1rem]'>
              <Image src={`/images/directors/${ director.thumbnail }`} alt={ director.name } fill />
            </div>
          </div>  
          <div className='w-[600px]'>
            <h1 className='text-[#ffffe9] text-[2rem] mb-[.75rem]'>{ director.name }</h1>
            <p className='mb-[1rem]'>{ director.biography }</p>
            <p className='mt-[2rem] text-sm font-lighter flex gap-[.5rem]'>
              <span>More details at 
                <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={ director.tmdb_link }>TMDB</Link>
              </span>
            </p>
          </div>
        </div>
        <div className='my-[1rem]'>
          <h3 className='uppercase mb-1'>Known For</h3>
          <hr className='mb-[1rem] border-[#445566]'/>
          <ListOfFilms films={ films } width={234} height={354} />
        </div>
      </section>
    </main>
  )
}