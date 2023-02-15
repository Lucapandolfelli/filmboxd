import Film from "./Film";
import { Film as FilmType} from "types";
import Link from "next/link";
import Image from "next/image";

type Props = {
  films: FilmType[],
  /* width: number,
  height: number */
}

export default function ListOfFilms ({ films, /* width, height */ }: Props) {
  return (
    <>
      <ul className='grid grid-cols-[repeat(auto-fit,_minmax(165px,1fr))] gap-[.5rem] justify-center sm:justify-start'>
        {films.map(film => (
          <li key={ film.id } className='w-full'>
            <Link href='/films/[slug]' as={`/films/${ film.slug }`}>
              <article className='hover:cursor-pointer'>
                <img src={`/images/films/${ film.thumbnail }`} alt={ film.slug }  className='object-cover w-full h-auto'/>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}