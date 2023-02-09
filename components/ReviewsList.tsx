import { Review as TypeReview } from "types"
import Review from "./Review"

type Props = {
  reviews: TypeReview[]
}

export default function ReviewsList ({ reviews }: Props) {
  return (
    <ul className='flex flex-col gap-[2rem]'>
      {reviews.map((review, index) => (
        <>
          <li key={ review.id }>
            <Review review={review} />
          </li>
          { index < reviews.length - 1 ? <hr className='border-[#2c3440]' /> : ''}
        </>
      ))}
    </ul>
  )
}