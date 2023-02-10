export default function Loading ({ listLenght }: any) { 
  return (
    <ul className='flex justify-between flex-wrap gap-[.5rem]'>
      {[listLenght].map((i) => (
        <li key={i}>
          <article className='bg-[#2d343b] w-[250px] h-[370px] animate-pulse'></article>
        </li>
      ))}
    </ul>
  )
}