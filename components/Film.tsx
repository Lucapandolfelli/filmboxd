import Image from "next/image"
import Link from "next/link"
import { Film as TypeFilm } from "types"

type Props = {
  data: TypeFilm
}

export default function Film ({ data }: Props) {
  return (
    <Link href='/films/[slug]' as={`/films/${ data.slug }`}>
      <article className='w-[250px] h-[370px] hover:cursor-pointer relative'>
        <Image src={`/images/${ data.thubmnail }`} alt={ data.title} fill />
      </article>
    </Link>
  )
}