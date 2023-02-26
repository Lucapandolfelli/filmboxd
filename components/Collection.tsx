import Link from "next/link";

interface Props {
  collection: any
}

export default function Collection ({ collection }: Props): JSX.Element {
  return (
    <section className='bg-black rounded-[.75rem] overflow-hidden mb-[1rem] lg:mb-[2rem] w-full h-[300px] bg-center bg-cover px-[1.125rem] md:px-[3rem] py-[2rem] md:py-[3rem]' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,24,28,0.01162471824667366) 0%, rgba(20,24,28,0.725910432532388) 0%), url('https://image.tmdb.org/t/p/original/${ collection.backdrop_path }')` }}>
      <div className='text-[#ffffe9]'>
        <h3 className='text-xl md:text-2xl font-bold mb-[.5rem]'><span className='text-base md:text-lg font-thin mr-[.5rem]'>Part of</span>{`The ${ collection.name }`}</h3>
        <p className='md-[1rem] md:mb-[2rem] text-sm md:text-base'>Includes
          { collection.parts?.map((film: any, index: number) => (
            index < collection.parts.length - 1
            ? <span key={ film.id }> {`${ film.title } (${ film.release_date.substr(0,4) })`}, </span>
            : <span key={ film.id }>and {`${ film.title } (${ film.release_date.substr(0,4) })`}.</span>
          ))}
        </p>
        <Link href={`/collection/${ collection.id }`} className='border-[2px] border-[#ffffe9] px-[1rem] py-[.5rem] rounded-[1rem] uppercase font-bold text-sm'>View the collection</Link>
      </div>
    </section>
  )
}