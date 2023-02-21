import Link from "next/link"
import { Genre } from "types"

type Props = {
  genres: Genre[]
}

export default function Genres ({ genres }: Props) {
  return (
    <ul className='flex gap-[.25rem]'>
      {genres.map((genre, index) => {
        if (index < genres.length - 1){
          return (
            <li key={ genre.id }>
              <Link href={`/films/genre/${ genre.id }`}>
                <p className='hover:text-amber-600'>{ genre.name },</p>
              </Link>
            </li>
          )
        } else {
          return (
            <li key={ genre.id }>
              <Link href={`/films/genre/${ genre.id }`}>
                <p className='hover:text-amber-600'>{ genre.name }</p>
              </Link>
            </li>
          )
        }
      })}
    </ul>
  )
}