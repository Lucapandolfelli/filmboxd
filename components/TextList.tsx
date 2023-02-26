import Link from "next/link"
import { Genre, Keyword } from "types"

type Props = {
  data: Genre[] | Keyword[],
  path: string,
  buttonStyle: boolean
}

export default function TextList ({ data, path, buttonStyle }: Props) {
  return (
    <ul className='flex gap-[.25rem] flex-wrap'>
      {data.map((item: Genre | Keyword, index: number) => (
        <li key={ item.id }>
          <Link href={`/films/${ path }/${ item.id }`}>
            { buttonStyle 
            ? <p className='bg-[#667788] rounded-[.25rem] px-[.5rem] leading-[1] py-[.5rem] transition-all duration-150 ease-in hover:bg-[#8298ae]'>{ item.name }</p>
            : <p className='transition-all duration-150 ease-in hover:text-[#ff8000]'>{ index === data.length - 1 ? `${item.name}` : `${item.name},` }</p>
            }
          </Link>
        </li>
      ))}
    </ul>
  )
}