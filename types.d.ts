export interface Film {
  id: number;
  title: string;
  slug: string;
  synopsis: string;
  year: number;
  directors: string[];
  cast: string[];
  reviews: Review[];
  thubmnail: string;
  background_thumbnail: string;
  imdb_link: string;
  tmdb_link: string;
  runtime: number;
}

export interface Review {
  id: number;
  user: User;
  publish_date: number;
  text: string;
  likes: number;
  replies: Review[];
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  avatar: string;
  reviews: Review[];
}
