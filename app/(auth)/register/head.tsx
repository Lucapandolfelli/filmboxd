export default function Head(): JSX.Element {
  return (
    <>
      <title>{`Sign Up ${"\u2022"} ${ process.env.NEXT_PUBLIC_APP_NAME }`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}