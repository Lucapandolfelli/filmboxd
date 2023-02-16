'use client'

import { useRef } from 'react'
import Film from "./Film";
import { Actor, Film as FilmType} from "types";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { useInView } from "react-intersection-observer";
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  data: FilmType[] | Actor[],
  width: number,
  height: number,
  itemPath: string
}

export default function Carousel ({ data, width, height, itemPath }: Props) {
  const { ref: firstItem, inView: inViewFirstItem } = useInView({
    threshold: .45,
  })
  const { ref: lastItem, inView: inViewLastItem } = useInView({
    threshold: .75,
  })

  const carousel = useRef<HTMLUListElement>(null)

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (null != carousel.current){
      carousel.current.scrollLeft -= carousel.current?.offsetWidth;
    }
  }

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (null != carousel.current){
      carousel.current.scrollLeft += carousel.current?.offsetWidth;
    }
  }

  return (
    <div className='relative'>
      <ul className='flex gap-[.5rem] overflow-x-hidden scroll-smooth' ref={carousel}>
        {data.map((item, index) => {
          if (index == 0){
            return (
              <li key={ item.id } ref={ firstItem }>
                <Link href={`/${ itemPath }/[slug]`} as={`/${ itemPath }/${ item.slug }`}>
                  <article className='hover:cursor-pointer relative' style={{ width: `${width}px`, height: `${height}px`}}>
                    <Image src={`/images/${ itemPath }/${ item.thumbnail }`} alt={ item.slug } fill />
                  </article>
                </Link>
              </li>
            )
          } else if (index == data.length - 1) {
            return (
              <li key={ item.id } ref={ lastItem }>
                <Link href={`/${ itemPath }/[slug]`} as={`/${ itemPath }/${ item.slug }`}>
                  <article className='hover:cursor-pointer relative' style={{ width: `${width}px`, height: `${height}px`}}>
                    <Image src={`/images/${ itemPath }/${ item.thumbnail }`} alt={ item.slug } fill />
                  </article>
                </Link>
              </li>
            )
          } else {
            return (
              <li key={ item.id }>
                <Link href={`/${ itemPath }/[slug]`} as={`/${ itemPath }/${ item.slug }`}>
                  <article className='hover:cursor-pointer relative' style={{ width: `${width}px`, height: `${height}px`}}>
                    <Image src={`/images/${ itemPath }/${ item.thumbnail }`} alt={ item.slug } fill />
                  </article>
                </Link>
              </li>
            )
          }
        })}
        { data.length > 4
          ? <>
            <button onClick={handleLeftClick} className={ !inViewFirstItem ? 'bg-black/75 text-white w-[35px] h-[35px] rounded-full grid place-items-center absolute top-[calc(50%_-_17.5px)] left-[.5rem] hover:bg-black hover:scale-[1.125]' : 'hidden'}><span className='sr-only'>Previous</span><MdArrowBackIos /></button>
            <button onClick={handleRightClick} className={ !inViewLastItem ? 'bg-black/75 text-white w-[35px] h-[35px] rounded-full grid place-items-center absolute top-[calc(50%_-_17.5px)] right-[.5rem] hover:bg-black hover:scale-[1.125]' : 'hidden'}><span className='sr-only'>Next</span><MdArrowForwardIos /></button>
          </>
          : ''}
      </ul>
    </div>
  )
}