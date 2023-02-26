'use client'

import { useState } from 'react'
import Link from "next/link";
import Carousel from "./Carousel";
import Genres from './TextList';
import { toHoursAndMinutes } from 'helpers';
import { languages } from 'languagues';
import { Cast, Crew, Film, Genre, Keyword } from "types";
import TextList from './TextList';

interface Props {
  film: Film,
  cast: Cast[],
  crew: Crew[],
  keywords: Keyword[]
}

interface Item {
  id: number;
  title: string;
  data: Cast[] | Crew[] | Genre[] | any;
  small?: string;
}

export default function FilmInformation ({ film, cast, crew, keywords }: Props) {
  const [selectedItem, setSelectedItem] = useState<Item>({ id: 1, title: 'Cast', data: cast })

  const items: Item[] = [
    { id: 1, title: 'Cast', data: cast, small: 'Actors' },
    { id: 2, title: 'Crew', data: crew, small: 'Members' },
    { id: 3, title: 'Details', data: [film.production_companies, film.production_countries, film.spoken_languages, film.original_language] },
    { id: 4, title: 'Genres', data: [film.genres, keywords] }
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
  } else if (selectedItem.title === 'Genres') {
    return (
      <GenresDetail data={selectedItem.data} />
    )
  } else {
    return (
      <Details data={selectedItem.data} />
    )
  }
}

function GenresDetail ({ data }: { data: any[] }) {
  const genres: Genre[] = data[0]
  const keywords = data[1]

  return (
    <>
      {/* <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1rem]'>Genres</h3> */}
      <div className='w-full mt-[2rem] font-lighter flex gap-[1rem] flex-wrap text-sm'>
        <span className='flex flex-col gap-[.75rem] text-[#ffffe9]'>
          <p className='text-[#667788] text-base'>Genres</p>
          <TextList data={genres} path='genre' buttonStyle={true} />
        </span>
        <span className='flex flex-col gap-[.75rem] text-[#ffffe9]'>
          <p className='text-[#667788] text-base'>Keywords</p>
          <TextList data={keywords} path='keyword' buttonStyle={true} />
        </span>
      </div> 
      {/* <span className='flex flex-col gap-[.25rem]'>
        <p className='text-[#667788]'>More at</p>
        <div>
          <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={`http://www.imdb.com/title/${ details.imdb_id }/maindetails`}>IMBD</Link> 
          <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={`https://www.themoviedb.org/movie/${ details.tmdb_id }`}>TMDB</Link>
        </div>
      </span> */}
    </>
  )
}

function Details ({ data }: { data: any }) {
  const companies = data[0]
  const countries = data[1]
  const languages = data[2]
  const originalLanguage = languages.find((languague: any) => languague.iso_639_1 === data[3])

  return (
    <>
      {/* <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1rem]'>Details</h3> */}
      <div className='w-full flex flex-col gap-[.75rem]'>
        <div className='flex gap-[.5rem]'>
          <p className='text-[#667788]'>{ companies === 1 ? 'Studio:' : 'Studios:' }</p>
          <ul className='flex gap-[.25rem] flex-wrap'>
            {companies.map((company: any, index: number) => (
              <li key={company.id}>
                <Link href='#' className='text-[#ffffe9] transition-all duration-150 ease-in hover:text-[#ff8000]'>{ index === companies.length - 1 ? `${ company.name }` : `${ company.name },` }</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-[.5rem]">
          <p className='text-[#667788]'>{ countries.lenght > 0 ? 'Country:' : 'Countries:'}</p>
          <ul className='flex gap-[.25rem] flex-wrap'>
            {countries.map((country: any, index: number) => (
              <li key={country.name}>
                <Link href='#' className='text-[#ffffe9] transition-all duration-150 ease-in hover:text-[#ff8000]'>{ index === companies.length - 1 ? `${ country.name }` : `${ country.name },` }</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-[.5rem]">
          <p className='text-[#667788]'>Spoken Languages:</p>
          <ul className='flex gap-[.25rem]'>
            {languages.map((language: any) => (
              <li key={language.name}>
                <Link href='#' className='text-[#ffffe9] transition-all duration-150 ease-in hover:text-[#ff8000]'>{ language.name }</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-[.5rem]">
          <p className='text-[#667788]'>Original Language:</p>
          <Link href='#' className='text-[#ffffe9] transition-all duration-150 ease-in hover:text-[#ff8000]'>{ originalLanguage.name }</Link>
        </div>
      </div>
    </>
  )
}