export const getGenres = async () => {
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

export const getGenreById = async (id: string) => {
  const genres = await getGenres();
  return genres.find((genre: any) => genre.id == Number(id));
};
