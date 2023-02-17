import { Film } from "types";

export const getFilmBySlug = async (slug: string): Promise<Film> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/v1/films/${slug}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
};

export const getAllFilms = async (): Promise<Film[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/v1/films`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
};

export const getFilmsByGender = async (genre: string): Promise<Film[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/v1/films/genre/${genre}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getFilmsByYear = async (year: string): Promise<Film[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/v1/films/year/${year}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
