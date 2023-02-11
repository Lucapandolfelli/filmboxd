import { Film } from "types";

const API_URL = "http://localhost:3000/api/v1/films";

export const fetchFilmsByYear = async (year: string): Promise<Film[]> => {
  const res = await fetch(`${API_URL}/year/${year}`, { cache: "no-store" });
  return await res.json();
};

export const fetchFilmBySlug = async (slug: string): Promise<Film> => {
  const res = await fetch(`${API_URL}/${slug}`, { cache: "no-store" });
  return await res.json();
};

export const fetchAllFilms = async (): Promise<Film[]> => {
  const res = await fetch(API_URL, { cache: "no-store" });
  return await res.json();
};
