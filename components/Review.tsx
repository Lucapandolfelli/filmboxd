import Image from "next/image"
import Link from "next/link"
import { BsFillSuitHeartFill } from "react-icons/bs"
import { Review as TypeReview } from "types"
import Punctuation from "./Punctuation"

export default function Review ({ review }: { review: TypeReview} ) {
  return (
    <article className='bg-[#242C33] rounded-[1rem] px-[1rem] py-[1.5rem] flex gap-[1rem]'>
      <div className='min-w-[40px] w-[40px] h-[40px] rounded-full relative overflow-hidden'>
        <Image src={`/images/${ review.user.avatar }`} alt={`Review by ${ review.user.username }`} fill />
      </div>
      <div>
        <span className='text-[#667788] text-sm md:text-base mb-4 flex items-center gap-[.25rem]'>Review by<Link className='text-amber-600 font-semibold' href={''}>{ review.user.username }</Link><Punctuation stars={ review.punctuation } /></span>
        <p className='text-sm lg:text-base mb-4 leading-[1.8]'>{ review.text }</p>
        <div className='flex gap-[.5rem] items-center text-sm md:text-base'>
          <BsFillSuitHeartFill />
          { review.likes.toLocaleString('es-AR') }
          <p>likes</p>
        </div>
      </div>
    </article>
  )
}