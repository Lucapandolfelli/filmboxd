import Link from "next/link";
import Image from "next/image";

type Props = {
  films: any,
  /* width: number,
  height: number */
}

export default function ListOfFilms ({ films, /* width, height */ }: Props) {
  return (
    <>
      <ul className='w-full grid grid-cols-[repeat(2,_minmax(165px,_250px))] sm:grid-cols-[repeat(auto-fit,_minmax(165px,_250px))] gap-[.5rem] justify-center sm:justify-start'>
        {films.map((film: any) => (
          <li key={ film?.id }>
            <Link href={`/films/${ film?.id }`}>
              <article className='hover:cursor-pointer'>
                <img src={`https://image.tmdb.org/t/p/original/${ film?.poster_path }`} alt={ film?.title }  className='object-cover w-full h-auto'/>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}