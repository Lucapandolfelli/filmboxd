'use client'

import { useState } from 'react'
import Link from "next/link";
import Carousel from "./Carousel";
import { Cast, Crew, Film, Genre } from "types";
import Genres from './Genres';

interface Props {
  film: Film,
  cast: Cast[],
  crew: Crew[]
}

interface Item {
  id: number;
  title: string;
  data: Cast[] | Crew[] | Genre[] | any;
  small?: string;
}

export default function FilmInformation ({ film, cast, crew }: Props) {
  const [selectedItem, setSelectedItem] = useState<Item>({ id: 1, title: 'Cast', data: cast })

  const details = {
    tmdb_id: film.id,
    imdb_id: film.imdb_id,
    revenue: film.revenue,
    release_date: film.release_date,
    runtime: film.runtime
  }

  const items: Item[] = [
    { id: 1, title: 'Cast', data: cast, small: 'Actors' },
    { id: 2, title: 'Crew', data: crew, small: 'Members' },
    { id: 3, title: 'Studio', data: cast },
    { id: 4, title: 'Details', data: [film.genres, details] }
  ]

  return (
    <section>
      <div className='mb-[2rem]'>
        <ul className='flex border-[1px] border-[#667788] rounded-[.25rem]'>
          {items.map((item: Item) => (
            <li className='w-[25%]' key={ item.id }>
              { selectedItem.id === item.id
                ? <button className='w-full py-[.5rem] uppercase text-sm bg-[#667788] text-[#ffffe9] font-semibold'>{ item.title }</button>
                : <button onClick={() => setSelectedItem(item)} className='w-full py-[.5rem] uppercase text-sm hover:bg-[#667788] text-[#ffffe9] font-semibold'>{ item.title }</button>
              }
            </li>
          ))}
        </ul>
      </div>
      <div className='mb-[1rem] lg:mb-[2rem] min-h-[292px]'>
        <Data selectedItem={selectedItem} />
      </div>
    </section>
  )
}

function Data ({ selectedItem }: { selectedItem: Item}) {
  if (selectedItem.title === 'Cast' || selectedItem.title === 'Crew'){
    return (
      <>
        <header className="flex justify-between items-center">
          <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1rem]'>{ selectedItem.title }<small className='text-[#667788] text-sm ml-[1rem]'>{ selectedItem.data.length } { selectedItem.small }</small></h3>
          {/* <Link href={`/films/${ film?.id }/cast`}>View All</Link> */}
        </header>
        <Carousel data={ selectedItem.data.slice(0, 9) } width={155} height={234} />
      </>
    )
  } else if (selectedItem.title === 'Details') {
    return (
      <Details data={selectedItem.data} />
    )
  } else {
    return (
      <></>
    )
  }
}

function Details ({ data }: { data: any[] }) {
  const genres: Genre[] = data[0]
  const details = data[1]

  return (
    <>
      <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1rem]'>Details</h3>
      <div className='w-full mt-[2rem] font-lighter flex gap-[2.5rem] flex-wrap mb-[1rem]'>
        { details.runtime != null && 
          <span className='flex flex-col gap-[.25rem] text-[#ffffe9]'>
            <p className='text-[#667788]'>Duration</p>
            {details.runtime } mins.
          </span>
        }
        <span className='flex flex-col gap-[.25rem] text-[#ffffe9]'>
          <p className='text-[#667788]'>Released</p>
          <p>{`${ new Date(details.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }`}</p>
        </span>
        { details.revenue > 0 && 
          <span className='flex flex-col gap-[.25rem] text-[#ffffe9]'>
            <p className='text-[#667788]'>Revenue</p>
            <p>${ details.revenue.toLocaleString() }</p>
          </span>
        }
        <span className='flex flex-col gap-[.25rem]'>
          <p className='text-[#667788]'>More at</p>
          <div>
            <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={`http://www.imdb.com/title/${ details.imdb_id }/maindetails`}>IMBD</Link> 
            <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={`https://www.themoviedb.org/movie/${ details.tmdb_id }`}>TMDB</Link>
          </div>
        </span>
      </div> 
      <div className='flex flex-col text-[#ffffe9]'>
        <p className='text-[#667788]'>Genres</p>
        <Genres genres={genres}/>
      </div>
    </>
  )
}