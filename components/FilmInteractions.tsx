import { BsFillBookmarkFill, BsFillEyeFill, BsFillStarFill, BsFillSuitHeartFill } from "react-icons/bs"
import { FaListUl, FaShare } from "react-icons/fa"
import { SlOptionsVertical } from 'react-icons/sl'
import FilmData from "./FilmData"

export default function FilmInteractions () {
  return (
    <section className='flex flex-col items-center gap-[1rem]'>
      <div className='flex justify-between gap-[.5rem] w-full'>
        <button className='bg-amber-600 text-[#ffffe9] border-0 uppercase font-semibold rounded-[.25rem] py-[.5rem] w-full'>Add Review</button>
        <button className='min-w-[50px] w-[50px] h-[50px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center'><SlOptionsVertical /></button>
      </div>
      <div className='flex justify-between w-full'>
        <button className='w-[50px] h-[50px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center transition-all duration-300 ease-linear hover:border-[#fff]'><FaShare /></button>
        <button className='w-[50px] h-[50px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center transition-all duration-300 ease-linear hover:border-[#fff]'><BsFillEyeFill /></button>
        <button className='w-[50px] h-[50px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center transition-all duration-300 ease-linear hover:border-[#fff]'><BsFillSuitHeartFill /></button>
        <button className='w-[50px] h-[50px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center transition-all duration-300 ease-linear hover:border-[#fff]'><BsFillBookmarkFill /></button>
        <button className='w-[50px] h-[50px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center transition-all duration-300 ease-linear hover:border-[#fff]'><FaListUl /></button>
      </div>
      <div className='flex gap-[1rem] text-[1.75rem] items-center justify-between w-full'>
        <ul className='flex gap-[.5rem] text-[#667788]'>
          <li><BsFillStarFill className='hover:cursor-pointer' /></li>
          <li><BsFillStarFill className='hover:cursor-pointer' /></li>
          <li><BsFillStarFill className='hover:cursor-pointer' /></li>
          <li><BsFillStarFill className='hover:cursor-pointer' /></li>
          <li><BsFillStarFill className='hover:cursor-pointer' /></li>
        </ul>
        <span className='font-semibold text-[#ffffe9] text-[2.25rem]'>4.2</span>
      </div>
      {/* <FilmData /> */}
      <div className='w-full flex flex-col gap-[1.5rem]'>
        <p className='flex justify-between'>
          <span className='text-[#667788]'>Views</span>
          <span className='text-[#ffffe9] text-lg'>7.645</span>
        </p>
        <p className='flex justify-between'>
          <span className='text-[#667788]'>Likes</span>
          <span className='text-[#ffffe9] text-lg'>7.645</span>
        </p>
      </div>
    </section>
  )
}