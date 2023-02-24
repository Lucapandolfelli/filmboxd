import Link from "next/link";
import Image from "next/image";

interface Props {
  item: any,
  width: number,
  height: number,
}

export default function CarouselItem ({ item, width, height }: Props): JSX.Element {
  let imageSource = ''

  if (item.poster_path != null) {
    imageSource = `https://image.tmdb.org/t/p/w500/${ item.poster_path }`
  } else if (item.profile_path != null) {
    imageSource = `https://image.tmdb.org/t/p/w500/${ item.profile_path }`
  } else if (item.profile_path == null) {
    imageSource = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
  } else if (item.poster_path == null) {
    imageSource = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
  }
  
  return (
    <Link href={ item.name ? `/person/${ item.id }` : `/films/${ item.id }`} key={ item.id }>
      <figure className='bg-[#dbdbdb] hover:cursor-pointer relative' style={{ width: `${width}px`, height: `${height}px`}}>
        <Image src={ imageSource } alt={ item.title ? item.title : item.name } fill />
      </figure>
    </Link>
  )
}