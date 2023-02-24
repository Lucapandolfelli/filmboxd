import { getUniqueListBy } from "helpers";
import { Cast, Crew, Person } from "types";

export const getCastByMovieId = async (movie_id: string): Promise<Cast[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { cast } = await res.json();
  return cast;
};

export const getCrewByMovieId = async (movie_id: string): Promise<Crew[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { crew } = await res.json();
  return getUniqueListBy(crew, "id");
};

export const getPersonById = async (person_id: string): Promise<Person> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${person_id}?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getFilmsOfActorById = async (person_id: string): Promise<Cast> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { cast } = await res.json();
  return cast.filter(({ popularity }: any) => popularity >= 10);
};

export const getDirectorByMovieId = async (movie_id: string): Promise<Crew> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { crew } = await res.json();
  return crew.filter(({ job }: any) => job === "Director")[0];
};
