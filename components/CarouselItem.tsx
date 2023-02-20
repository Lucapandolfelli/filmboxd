import Link from "next/link";
import Image from "next/image";
import { Actor, Film } from "types";

interface Props {
  item: any,
  width: number,
  height: number,
  itemPath: string
}

export default function CarouselItem ({ item, itemPath, width, height }: Props) {
  return (
    <Link href={ item.name ? `/actor/${ item.id }` : `/films/${ item.id }`} key={ item.id }>
      <article className='hover:cursor-pointer relative' style={{ width: `${width}px`, height: `${height}px`}}>
        <Image src={`https://image.tmdb.org/t/p/w500/${ item.poster_path ? item.poster_path : item.profile_path }`} alt={ item.title } fill />
      </article>
    </Link>
  )
}