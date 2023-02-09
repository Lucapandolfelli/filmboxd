import Link from "next/link"
import { Actor } from "types"

type Props = {
  cast: Actor[]
}

export default function CastList ({ cast }: Props) {
  return (
    <ul className='flex gap-[.5rem] flex-wrap w-[300px]'>
      {cast.map(actor => (
        <li key={ actor.id }>
          <Link href={'/actor/[slug]'} as={`/actor/${ actor.slug }`}>
            <p className='bg-[#99aabb] text-[#171c21] text-[.7rem] rounded-[.25rem] py-[.25rem] px-[.5rem] hover:cursor-pointer'>{ actor.name }</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}