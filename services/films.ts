import { Film } from "types";

const API_URL = "http://localhost:3000/api/v1/films";

export const fetchFilmsByYear = async (year: string): Promise<Film[]> => {
  const res = await fetch(`${API_URL}/year/${year}`, {
    next: { revalidate: 120 },
  });
  return await res.json();
};

export const fetchFilmBySlug = async (slug: string): Promise<Film> => {
  const res = await fetch(`${API_URL}/${slug}`, {
    next: { revalidate: 120 },
  });
  return await res.json();
};

export const fetchAllFilms = async (): Promise<Film[]> => {
  const res = await fetch(API_URL, {
    next: { revalidate: 120 },
  });
  return await res.json();
};
