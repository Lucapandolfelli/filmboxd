import Image from "next/image"
import Link from "next/link"
import { Film as TypeFilm } from "types"

type Props = {
  data: TypeFilm,
  width: number,
  height: number
}

export default function Film ({ data, width, height }: Props) {
  return (
    <Link href='/films/[slug]' as={`/films/${ data.slug }`}>
      <article className='hover:cursor-pointer relative' style={{ width: `${width}px`, height: `${height}px`}}>
        <Image src={`/images/films/${ data.thubmnail }`} alt={ data.slug} fill />
      </article>
    </Link>
  )
}