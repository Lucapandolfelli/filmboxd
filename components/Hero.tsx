'use client'

import { toHoursAndMinutes } from "helpers"
import Link from "next/link"
import { useState } from "react"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import TextList from "./TextList"

interface Props {
  films: any
}

export default function Hero ({ films }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const previous = () => {
    const isFirstItem = currentIndex === 0
    const newIndex = isFirstItem ? films.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const next = () => {
    const isLastItem = currentIndex === films.length - 1
    const newIndex = isLastItem ? 0 - 1 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <div className='relative w-full h-[460px] md:h-[700px]'>
      {
        films.map((film: any, index: number) => {
          if (index === currentIndex){
            return (
              <section key={ film?.id } className='px-[1.25rem] w-full h-full bg-center bg-cover flex justify-start items-center bg-black' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,24,28,0.01162471824667366) 0%, rgba(20,24,28,0.725910432532388) 0%), url('https://image.tmdb.org/t/p/original/${ film?.backdrop_path }')` }}>
                <div className='max-w-5xl w-full mx-auto h-fit text-[#99aabb]'>
                    <div className='flex gap-[1rem] items-center'>
                      <h1 className='font-bold text-[3rem] text-[#ffffe9] mb-[.75rem]'>{ film?.title }</h1>
                      <span className='bg-[#14181c] border-[2px] border-[#00e054] h-fit text-[.65rem] text-[#00e054] font-bold uppercase rounded-[1rem] px-[.75rem] py-[.25rem]'>Trending</span>
                    </div>
                    <div className='flex gap-[.5rem] mb-[.75rem] text-lg text-[#667788]'>
                      <TextList data={ film?.genres } path='genre' />
                      &#8226;
                      <span>{ toHoursAndMinutes(film?.runtime) }</span>
                    </div>
                    <p className='mb-[1.5rem]'>{ film?.overview }</p>
                    <Link href={`/films/${ film?.id }`} className='block w-fit bg-[#41bbf4] text-[#ffffe9] rounded-[.75rem] px-[1.5rem] py-[.5rem]'>View Film</Link>
                  </div>
              </section>
            )
          }
        })
      }
      <button onClick={previous} className='text-[2rem] text-white/50 w-[35px] h-[35px] grid place-items-center absolute top-[calc(50%_-_17.5px)] left-[2rem] '><span className='sr-only'>Previous</span><MdArrowBackIos /></button>
      <button onClick={next} className='text-[2rem] text-white/50 w-[35px] h-[35px] grid place-items-center absolute top-[calc(50%_-_17.5px)] right-[2rem]'><span className='sr-only'>Next</span><MdArrowForwardIos /></button>
    </div>
  )
}

