import { BsFillBookmarkFill, BsFillEyeFill, BsFillSuitHeartFill } from "react-icons/bs"

export default function FilmData () {
  return (
    <ul className='flex gap-[1rem] justify-center text-sm'>
      <li className='flex items-center gap-[.5rem]'><BsFillEyeFill /><span>200</span></li>
      <li className='flex items-center gap-[.35rem]'><BsFillSuitHeartFill /><span>200</span></li>
      <li className='flex items-center gap-[.35rem]'><BsFillBookmarkFill /><span>200</span></li>
    </ul>
  )
}