import { BsFillBookmarkFill, BsFillEyeFill, BsFillStarFill, BsFillSuitHeartFill } from "react-icons/bs"
import { FaListUl, FaShare } from "react-icons/fa"
import { SlOptionsVertical } from 'react-icons/sl'
import FilmData from "./FilmData"

export default function FilmInteractions () {
  return (
    <section className='flex flex-col items-center gap-[1rem]'>
      <div className='flex justify-between gap-[.5rem] w-full'>
        <button className='bg-amber-600 text-[#ffffe9] rounded-[.25rem] py-[.5rem] w-full'>Add Reviews</button>
        <button className='min-w-[40px] w-[40px] h-[40px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center'><SlOptionsVertical /></button>
      </div>
      <div className='flex justify-between w-full'>
        <button className='w-[40px] h-[40px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center'><FaShare /></button>
        <button className='w-[40px] h-[40px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center'><BsFillEyeFill /></button>
        <button className='w-[40px] h-[40px] rounded-[.25rem] border-[1px] border-[#50565c] flex justify-center items-center'><BsFillSuitHeartFill /></button>
        <button className='w-[40px] h-[40px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center'><BsFillBookmarkFill /></button>
        <button className='w-[40px] h-[40px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center'><FaListUl /></button>
      </div>
      <div className='flex gap-[1rem] text-[1.75rem] items-center'>
        <ul className='flex gap-[.5rem]'>
          <li><BsFillStarFill /></li>
          <li><BsFillStarFill /></li>
          <li><BsFillStarFill /></li>
          <li><BsFillStarFill /></li>
          <li><BsFillStarFill /></li>
        </ul>
        <span className='font-semibold text-[#ffffe9] text-[2.25rem]'>4.2</span>
      </div>
      {/* <FilmData /> */}
    </section>
  )
}