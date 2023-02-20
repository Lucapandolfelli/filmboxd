export const getCastByMovieId = async (movie_id: string) => {
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

export const getActorById = async (person_id: string) => {
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

export const getFilmsOfActorById = async (person_id: string) => {
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
  return cast.filter(({ popularity }) => popularity >= 10);
};
