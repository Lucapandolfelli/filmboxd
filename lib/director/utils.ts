export const getDirectorByMovieId = async (movie_id: string) => {
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
  return crew.filter(({ job }) => job === "Director")[0];
};
