import Film from "./Film";
import { Film as FilmType} from "types";

type Props = {
  films: FilmType[],
  width: number,
  height: number
}

export default function CarouselOfFilms ({ films, width, height }: Props) {
  return (
    <>
      <ul className='flex gap-[.5rem] relative'>
        {films.map(film => (
          <li key={ film.id }>
            <Film data={film} width={width} height={height} />
          </li>
        ))}
        <button className='bg-white text-black w-[20px] h-[20px] rounded-full grid place-items-center absolute top-[50%] right-0'>{'>'}</button>
      </ul>
    </>
  )
}