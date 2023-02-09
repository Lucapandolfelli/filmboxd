'use client'

import { useRef } from 'react'
import Film from "./Film";
import { Film as FilmType} from "types";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { useInView } from "react-intersection-observer";

type Props = {
  films: FilmType[],
  width: number,
  height: number
}

export default function CarouselOfFilms ({ films, width, height }: Props) {
  const { ref: firstFilm, inView: inViewFirstFilm } = useInView({
    threshold: .75,
  })
  const { ref: lastFilm, inView: inViewLastFilm } = useInView({
    threshold: .75,
  })

  const carousel = useRef<HTMLUListElement>(null)

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(carousel.current?.childNodes[0])
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
        {films.map((film, index) => {
          if (index == 0){
            return (
              <li key={ film.id } ref={firstFilm}>
                <Film data={film} width={width} height={height} />
              </li>
            )
          } else if (index == films.length - 1) {
            return (
              <li key={ film.id } ref={lastFilm}>
                <Film data={film} width={width} height={height} />
              </li>
            )
          } else {
            return (
              <li key={ film.id }>
                <Film data={film} width={width} height={height} />
              </li>
            )
          }
        })}
        { films.length > 4
          ? <>
            <button onClick={handleLeftClick} className={ !inViewFirstFilm ? 'bg-black/75 text-white w-[35px] h-[35px] rounded-full grid place-items-center absolute top-[calc(50%_-_17.5px)] left-[.5rem] hover:bg-black hover:scale-[1.125]' : 'hidden'}><MdArrowBackIos /></button>
            <button onClick={handleRightClick} className={ !inViewLastFilm ? 'bg-black/75 text-white w-[35px] h-[35px] rounded-full grid place-items-center absolute top-[calc(50%_-_17.5px)] right-[.5rem] hover:bg-black hover:scale-[1.125]' : 'hidden'}><MdArrowForwardIos /></button>
          </>
          : ''}
      </ul>
    </div>
  )
}