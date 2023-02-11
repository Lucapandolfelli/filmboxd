import { Director } from "types";

const API_URL = "http://localhost:3000/api/v1/director";

export const fecthDirectorBySlug = async (slug: string): Promise<Director> => {
  const res = await fetch(`${API_URL}/${slug}`, { cache: "no-store" });
  return res.json();
};
