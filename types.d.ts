export interface Film {
  id: number;
  title: string;
  slug: string;
  synopsis: string;
  year: number;
  directors: Director[];
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
  punctuation: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  avatar: string;
  reviews: Review[];
}

export interface Director {
  id: number;
  name: string;
  slug: string;
  biography: string;
  films: Film[];
  tmdb_link: string;
  thumbnail: string;
}

export interface Actor {
  id: number;
  name: string;
  slug: string;
  biography: string;
  films: Film[];
  tmdb_link: string;
  thumbnail: string;
}
