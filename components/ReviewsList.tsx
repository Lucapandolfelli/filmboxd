import { Review as TypeReview } from "types"
import Review from "./Review"

type Props = {
  reviews: TypeReview[]
}

export default function ReviewsList ({ reviews }: Props) {
  return (
    <ul className='flex flex-col gap-[1.25rem]'>
      { reviews.length > 0 
      ? reviews.map((review, index) => (
        <li key={ review.id } className='flex flex-col gap-[2rem]'>
          <Review review={review} />
        </li>
      ))
      : <li>
        <p className='text-[#667788] text-sm md:text-base'>Todavía nadie hizo una review de esta película. Sé el primero en hacerla.</p>
      </li>
      }
    </ul>
  )
}