import { getFilmById } from "../films/fetch";
import { Genre } from "types";
import { getUniqueListBy } from "helpers";

export const getCollectionById = async (collection_id: string) => {
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
  collection: any
): Promise<number> => {
  let totalRevenue = 0;
  const films = collection.map((film: any) => film.id);
  await Promise.all(
    films.map(async (f: any) => {
      const { revenue } = await getFilmById(f);
      totalRevenue += revenue;
      return totalRevenue;
    })
  );
  return totalRevenue;
};

export const getCollectionGenres = async (
  collection: any
): Promise<Genre[]> => {
  let collectionGenres: Genre[] = [];
  const films = collection.map((film: any) => film.id);
  await Promise.all(
    films.map(async (f: any) => {
      const { genres } = await getFilmById(f);
      genres.map((genre: Genre) => {
        if (!collectionGenres.includes(genre)) {
          collectionGenres.push(genre);
        }
      });
    })
  );
  return getUniqueListBy(collectionGenres, "id");
};
