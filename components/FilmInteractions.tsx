import { BsFillBookmarkFill, BsFillEyeFill, BsFillStarFill, BsFillSuitHeartFill } from "react-icons/bs"
import { FaListUl, FaShare } from "react-icons/fa"
import { SlOptionsVertical } from 'react-icons/sl'

function InteractionButton ({ icon }: { icon: React.ReactNode }) {
  return (
    <button className='min-w-[50px] w-[50px] h-[50px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center transition-all duration-150 ease-linear hover:border-[#ffffe9] hover:text-[#ffffe9]'>{ icon }</button>
  )
}

export default function FilmInteractions () {
  return (
    <>
      <div className='flex justify-between gap-[.5rem] w-full'>
        <button className='bg-amber-600 text-[#ffffe9] border-0 uppercase font-semibold rounded-[.25rem] py-[.5rem] w-full'>Add Review</button>
        <InteractionButton icon={<SlOptionsVertical />} />
      </div>
      <div className='flex justify-between w-full'>
        <InteractionButton icon={<FaShare />} />
        <InteractionButton icon={<BsFillEyeFill />} />
        <InteractionButton icon={<BsFillSuitHeartFill />} />
        <InteractionButton icon={<BsFillBookmarkFill />} />
        <InteractionButton icon={<FaListUl />} />
      </div>
      <div className='flex gap-[1rem] text-[1.75rem] items-center justify-between w-full'>
        <ul className='flex gap-[.5rem] text-[#667788]'>
          <li className='transition-all duration-150 ease-linear hover:scale-[1.1] hover:text-[#ffffe9]'><BsFillStarFill className='hover:cursor-pointer'/></li>
          <li className='transition-all duration-150 ease-linear hover:scale-[1.1] hover:text-[#ffffe9]'><BsFillStarFill className='hover:cursor-pointer'/></li>
          <li className='transition-all duration-150 ease-linear hover:scale-[1.1] hover:text-[#ffffe9]'><BsFillStarFill className='hover:cursor-pointer'/></li>
          <li className='transition-all duration-150 ease-linear hover:scale-[1.1] hover:text-[#ffffe9]'><BsFillStarFill className='hover:cursor-pointer'/></li>
          <li className='transition-all duration-150 ease-linear hover:scale-[1.1] hover:text-[#ffffe9]'><BsFillStarFill className='hover:cursor-pointer'/></li>
        </ul>
        <span className='font-semibold text-[#ffffe9] text-[2.25rem]'>4.2</span>
      </div>
      <div className='w-full flex flex-col gap-[1.5rem]'>
        <p className='flex justify-between'>
          <span className='text-[#667788]'>Rating</span>
          <span className='text-[#ffffe9] text-lg'>7.645</span>
        </p>
        <p className='flex justify-between'>
          <span className='text-[#667788]'>Views</span>
          <span className='text-[#ffffe9] text-lg'>7.645</span>
        </p>
        <p className='flex justify-between'>
          <span className='text-[#667788]'>Likes</span>
          <span className='text-[#ffffe9] text-lg'>7.645</span>
        </p>
        <p className='flex justify-between'>
          <span className='text-[#667788]'>Lists</span>
          <span className='text-[#ffffe9] text-lg'>7.645</span>
        </p>
      </div>
    </>
  )
}

