import { Review } from "types"

type Props = {
  reviews: Review[]
}

export default function ReviewsList ({ reviews }: Props) {
  return (
    <ul>
      {reviews.map(review => (
        <li key={ review.id }>
          <p>{ review.text }</p>
        </li>
      ))}
    </ul>
  )
}