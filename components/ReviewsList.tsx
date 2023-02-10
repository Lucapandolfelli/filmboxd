import { Review as TypeReview } from "types"
import Review from "./Review"

type Props = {
  reviews: TypeReview[]
}

export default function ReviewsList ({ reviews }: Props) {
  return (
    <ul className='flex flex-col gap-[2rem]'>
      { reviews.length > 0 
      ? reviews.map((review, index) => (
        <li key={ review.id } className='flex flex-col gap-[2rem]'>
          <Review review={review} />
          { index < reviews.length - 1 ? <hr className='border-[#2c3440]' /> : ''}
        </li>
      ))
      : <li>
        <p>Todavía nadie hizo una review de esta película. Sé el primero en hacerla.</p>
      </li>
      }
    </ul>
  )
}