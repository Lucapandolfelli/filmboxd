import { getUniqueListBy } from "helpers";
import { Film, FilmResult } from "types";

/** ONE FILM **/
export const getFilmById = async (movie_id: string): Promise<Film> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.TMDB_API_KEY}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

/** TRENDING **/
export const getTrendingFilms = async (): Promise<FilmResult[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { results } = await res.json();
  return results.filter((film: any) => film.poster_path != null);
};

/** CREDIST (ACTOS/DIRECTORS/ETC) **/
export const getCredits = async (movie_id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

/** REVIEWS **/
export const getReviewsByMovieId = async (
  movie_id: string
): Promise<FilmResult[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { results } = await res.json();
  return results.slice(0, 2);
};

/** RELATED **/
export const getRelatedFilms = async (
  movie_id: string
): Promise<FilmResult[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { results } = await res.json();
  return results.filter((film: any) => film.poster_path != null);
};

/** POPULAR **/
export const getPopularFilms = async (): Promise<FilmResult[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { results } = await res.json();
  return results.filter((film: any) => film.poster_path != null);
};

/** TOP RATED **/
export const getTopRatedFilms = async (): Promise<FilmResult[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { results } = await res.json();
  return results.filter((film: any) => film.poster_path != null);
};

/** UPCOMING **/
export const getUpcomingFilms = async (): Promise<FilmResult[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}`,
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

/** UPCOMING **/
export const getNowPlayingFilms = async (): Promise<FilmResult[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`,
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

/** FILM LISTS **/
export const getFilmListByMovieId = async (movie_id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/lists?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { total_results } = await res.json();
  return total_results;
};

/** FILMS BY GENRE ID **/
export const getFilmsByGenreId = async (id: string): Promise<FilmResult[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&page=1&with_genres=${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { results } = await res.json();
  return results.filter((film: any) => film.poster_path != null);
};

/** FILMS BY YEAR **/
export const getFilmsByYear = async (year: number): Promise<FilmResult[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&include_adult=false&page=1&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { results } = await res.json();
  return results.filter((film: any) => film.poster_path != null);
};

/** COMPLETE FILMS DATA BY FILMS ID **/
export const getCompleteFilmsData = async (filmsIds: number[]) => {
  let films: any = [];
  await Promise.all(
    filmsIds.map(async (filmId: number) => {
      const film = await getFilmById(filmId.toString());
      films.push(film);
    })
  );
  return getUniqueListBy(films, "id");
};

/** WATCH PROVIDERS **/
export const getWatchProvidersByFilmId = async (movie_id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { results } = await res.json();
  return results.US;
};

/** FILMS KEYWORDS **/
export const getKeywordsByFilmId = async (movie_id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/keywords?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { keywords } = await res.json();
  return keywords;
};

/** SEARCH FILM RESULTS **/
export const searchMovie = async (query: string): Promise<FilmResult[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=false&page=1&query=${query}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { results } = await res.json();
  return results.filter((film: any) => film.poster_path != null);
};
