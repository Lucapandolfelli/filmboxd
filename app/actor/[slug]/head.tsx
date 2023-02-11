async function getActor(slug: string) {
  const res = await fetch(`http://localhost:3000/api/v1/actor/${slug}`);
  return res.json();
}

export default async function Head({ params }: { params: { slug: string } }) {
  const { name } = await getActor(params.slug);
  
  return (
    <>
      <title>{`${ name } ${"\u2022"} App` }</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}