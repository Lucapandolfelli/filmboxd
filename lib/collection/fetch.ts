import { getFilmById } from "../films/fetch";
import { Collection, FilmResult, Genre } from "types";
import { getUniqueListBy } from "helpers";

export const getCollectionById = async (
  collection_id: string
): Promise<Collection> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/collection/${collection_id}?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getCollectionRevenue = async (
  collection: FilmResult[]
): Promise<number> => {
  let totalRevenue: number = 0;
  const films: number[] = collection.map((film: FilmResult): number => film.id);
  await Promise.all(
    films.map(async (filmId: number) => {
      const { revenue } = await getFilmById(filmId.toString());
      totalRevenue += revenue;
      return totalRevenue;
    })
  );
  return totalRevenue;
};

export const getCollectionGenres = async (
  collection: FilmResult[]
): Promise<Genre[]> => {
  let collectionGenres: Genre[] = [];
  const films: number[] = collection.map((film: FilmResult): number => film.id);
  await Promise.all(
    films.map(async (filmId: number) => {
      const { genres } = await getFilmById(filmId.toString());
      genres.map((genre: Genre) => {
        if (!collectionGenres.includes(genre)) {
          collectionGenres.push(genre);
        }
      });
    })
  );
  return getUniqueListBy(collectionGenres, "id");
};
