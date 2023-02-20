'use client'

import { useInteraction } from "@/hooks/useInteraction"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { BsFillBookmarkFill, BsFillEyeFill, BsFillStarFill, BsFillSuitHeartFill } from "react-icons/bs"
import { FaListUl, FaShare } from "react-icons/fa"
import { SlOptionsVertical } from 'react-icons/sl'

function InteractionButton ({ icon, action }: { icon: React.ReactNode, action?: any }) {
  return (
    <button onClick={action} className='min-w-[50px] w-[50px] h-[50px] rounded-[.25rem] border-[1px] border-[#445566] flex justify-center items-center transition-all duration-150 ease-linear hover:border-[#ffffe9] hover:text-[#ffffe9]'>{ icon }</button>
  )
}

interface Props {
  initialViews: number;
  initialLikes: number;
  initialSaves: number;
  initialRating: number;
}

export default function FilmInteractions ({ initialViews, initialLikes, initialSaves, initialRating }: Props) {
  const { views, likes, saves, rating, addView, addLike, addSave } = useInteraction({ views: initialViews, likes: initialLikes, saves: initialSaves, rating: initialRating})
  const { data: session, status } = useSession() 

  return (
    <>
      { session ?
        <>
          <div className='flex justify-between gap-[.5rem] w-full'>
            <button className='bg-amber-600 text-[#ffffe9] border-0 uppercase font-semibold rounded-[.25rem] py-[.5rem] w-full'>Add Review</button>
            <InteractionButton icon={<SlOptionsVertical />} />
          </div>
          <div className='flex justify-between w-full'>
            <InteractionButton icon={<FaShare />} />
            <InteractionButton icon={<BsFillEyeFill />} action={() => addView()}/>
            <InteractionButton icon={<BsFillSuitHeartFill />} action={() => addLike()}/>
            <InteractionButton icon={<BsFillBookmarkFill />} action={() => addSave()}/>
            <InteractionButton icon={<FaListUl />} />
          </div>
        </>
        : <p>You´re not logged yet? Do it <Link href='/login' className='text-amber-600'>here</Link></p>
      }
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
          <span className='text-[#ffffe9] text-lg'>{ rating }</span>
        </p>
        <p className='flex justify-between'>
          <span className='text-[#667788]'>Views</span>
          <span className='text-[#ffffe9] text-lg'>{ views }</span>
        </p>
        <p className='flex justify-between'>
          <span className='text-[#667788]'>Likes</span>
          <span className='text-[#ffffe9] text-lg'>{ likes }</span>
        </p>
        <p className='flex justify-between'>
          <span className='text-[#667788]'>Lists</span>
          <span className='text-[#ffffe9] text-lg'>{ saves }</span>
        </p>
      </div>
    </>
  )
}

