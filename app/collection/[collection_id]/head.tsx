import { getCollectionById } from "@/lib/collection/fetch";

interface Props {
  params: { collection_id: string }
}

export default async function Head({ params: { collection_id } }: Props): Promise<JSX.Element> {
  const { name } = await getCollectionById(collection_id);
  
  return (
    <>
      <title>{`${ name } ${"\u2022"} ${ process.env.NEXT_PUBLIC_APP_NAME }` }</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}