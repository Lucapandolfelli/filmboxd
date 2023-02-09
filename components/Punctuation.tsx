import { BsFillStarFill } from "react-icons/bs";

export default function Punctuation ({ stars }: { stars: number }) {
  return (
    <ul className='flex gap-[.125rem] ml-[.25rem]'>  
      <li><BsFillStarFill /></li>
      <li><BsFillStarFill /></li>
      <li><BsFillStarFill /></li>
    </ul>
  )
}