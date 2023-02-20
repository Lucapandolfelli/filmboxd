import Review from "./Review"

type Props = {
  reviews: any
}

export default function ReviewsList ({ reviews }: Props) {
  return (
    <ul className='flex flex-col gap-[1.25rem]'>
      { reviews 
      ? reviews.map((review: any, index: number) => (
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