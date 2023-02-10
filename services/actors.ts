import { Actor } from "types";

const API_URL = "http://localhost:3000/api/v1/actor";

export const fecthActorBySlug = async (slug: string): Promise<Actor> => {
  const res = await fetch(`${API_URL}/${slug}`, {
    next: { revalidate: 120 },
  });
  return res.json();
};
