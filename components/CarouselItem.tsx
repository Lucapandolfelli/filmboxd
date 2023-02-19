import Link from "next/link";
import Image from "next/image";
import { Actor, Film } from "types";

interface Props {
  item: Film | Actor,
  width: number,
  height: number,
  itemPath: string
}

export default function CarouselItem ({ item, itemPath, width, height }: Props) {
  return (
    <Link href={`/${ itemPath }/${ item.slug }`} key={ item.id }>
      <article className='hover:cursor-pointer relative' style={{ width: `${width}px`, height: `${height}px`}}>
        <Image src={`/images/${ itemPath }/${ item.thumbnail }`} alt={ item.slug } fill />
      </article>
    </Link>
  )
}