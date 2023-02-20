import Image from "next/image"
import Link from "next/link"
import { BsFillSuitHeartFill } from "react-icons/bs"
import Punctuation from "./Punctuation"

interface Props {
  review: any
}

export default function Review ({ review }: Props) {
  return (
    <article className='bg-[#242C33] rounded-[1rem] px-[1rem] py-[1.5rem] flex gap-[1rem]'>
      <div className='min-w-[40px] w-[40px] h-[40px] rounded-full relative overflow-hidden'>
        {/* <Image src={ review.author_detail.avatar_path } alt={`Review by ${ review.author }`} fill /> */}
      </div>
      <div>
        <span className='text-[#667788] text-sm md:text-base mb-4 flex items-center gap-[.25rem]'>Review by<Link className='text-amber-600 font-semibold' href={''}>{ review.author}</Link><Punctuation stars={ review.rating } /></span>
        <p className='text-sm lg:text-base mb-4 leading-[1.8]'>{ review.content }</p>
        <div className='flex gap-[.5rem] items-center text-sm md:text-base'>
          <BsFillSuitHeartFill />
          {/* { review.likes.toLocaleString('es-AR') } */}
          <p>likes</p>
        </div>
      </div>
    </article>
  )
}