import { FilmResult, Keyword } from "types";

export const getKeywordById = async (keyword_id: string): Promise<Keyword> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/keyword/${keyword_id}?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getFilmsByKeyword = async (
  keyword_id: string
): Promise<FilmResult[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/keyword/${keyword_id}/movies?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { results } = await res.json();
  return results;
};
