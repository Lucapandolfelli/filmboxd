export default async function Head({ params }: { params: { year: string } }) {
  return (
    <>
      <title>{`Films of ${ params.year } ${"\u2022"} App` }</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}