interface Props {
  url: string,
  height: string
}

export default function Backdrop ({ url, height }: Props) {
  if (height == 'large'){
    return (
      <section className={`w-full h-[460px] md:h-[560px] bg-center bg-cover relative`} style={{ backgroundImage: `linear-gradient(0deg, rgba(20,24,28,1) 2%, rgba(20,24,28,0.725910432532388) 18%, rgba(20,24,28,0.01162471824667366) 100%), url('https://image.tmdb.org/t/p/original/${ url }')` }}></section>
    )
  } else {
    return (
      <section className={`w-full h-[160px] bg-center bg-cover relative`} style={{ backgroundImage: `linear-gradient(0deg, rgba(20,24,28,1) 2%, rgba(20,24,28,0.725910432532388) 18%, rgba(20,24,28,0.01162471824667366) 100%), url('https://image.tmdb.org/t/p/original/${ url }')` }}></section>
    )
  }
}