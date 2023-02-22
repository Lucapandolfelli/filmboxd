import { ensure, getUniqueListBy } from "helpers";
import { Genre } from "types";

export const getGenres = async (): Promise<Genre[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { genres } = await res.json();
  return genres;
};

export const getGenreById = async (id: string): Promise<Genre> => {
  const genres: Genre[] = await getGenres();
  const genre: Genre = ensure(
    genres.find((genre: Genre) => genre.id == Number(id))
  );
  return genre;
};

export const getGenresByIds = async (genresIds: number[]): Promise<Genre[]> => {
  let genres: Genre[] = [];
  await Promise.all(
    genresIds.map(async (genreId: number) => {
      const genre = await getGenreById(genreId.toString());
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    })
  );
  return getUniqueListBy(genres, "id");
};
