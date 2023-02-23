'use client'

import { useRef } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { useInView } from "react-intersection-observer";
import CarouselItem from './CarouselItem';

type Props = {
  data: [] | any[],
  width: number,
  height: number,
}

export default function Carousel ({ data, width, height }: Props) {
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
        {data.map((item: any, index) => {
          if (index == 0){
            return (
              <li key={ index } ref={ firstItem }>
                <CarouselItem item={item} width={width} height={height} />
              </li>
            )
          } else if (index == data.length - 1) {
            return (
              <li key={ index } ref={ lastItem }>
                <CarouselItem item={item} width={width} height={height} />
              </li>
            )
          } else {
            return (
              <li key={ index }>
                <CarouselItem item={item} width={width} height={height} />
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
