import Link from "next/link"
import { Genre } from "types"

type Props = {
  genres: Genre[]
}

export default function Genres ({ genres }: Props) {
  return (
    <ul className='flex gap-[.5rem] flex-wrap w-[300px]'>
      {genres.map(genre => (
        <li key={ genre.id }>
          <Link href={'/films/genre/[genre]'} as={`/films/genre/${ genre.slug }`}>
            <p className='bg-[#99aabb] text-[#171c21] text-[.7rem] rounded-[.25rem] py-[.25rem] px-[.5rem] hover:cursor-pointer'>{ genre.name }</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}