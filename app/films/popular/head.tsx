export default async function Head(): Promise<JSX.Element> {
   return (
    <>
      <title>{`Popular Films ${"\u2022"} ${ process.env.NEXT_PUBLIC_APP_NAME }` }</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}