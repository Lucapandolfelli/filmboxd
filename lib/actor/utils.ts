import { Actor } from "types";

export const getActorBySlug = async (slug: string): Promise<Actor> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/v1/actor/${slug}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
