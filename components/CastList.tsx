type Props = {
  cast: string[]
}

export default function CastList ({ cast }: Props) {
  return (
    <ul className='flex gap-[.5rem] flex-wrap w-[300px]'>
      {cast.map(c => (
        <li key={ c }>
          <p className='bg-[#99aabb] text-[#171c21] text-[.7rem] rounded-[.25rem] py-[.25rem] px-[.5rem] hover:cursor-pointer'>{ c }</p>
        </li>
      ))}
    </ul>
  )
}