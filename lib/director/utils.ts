import { Director } from "types";

export const getDirectorBySlug = async (slug: string): Promise<Director> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/v1/director/${slug}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
