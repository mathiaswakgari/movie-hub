import APIClient from "./api-clinet";

export interface FetchMovies {
  data: {
    movie_count: number;
    movies: Array<Movie>;
  };
}
export interface Cast {
  name: string;
  character_name: string;
  url_small_image: string;
}
export interface Movie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  summary: string;
  genres?: Array<string>;
  background_image: string;
  small_cover_image: string;
  large_cover_image: string;
  medium_cover_image: string;
  yt_trailer_code: string;
  large_screenshot_image1: string;
  large_screenshot_image2: string;
  medium_screenshot_image1: string;
  medium_screenshot_image2: string;
  description_full: string;
  cast?: Array<Cast>;
}

export default new APIClient<FetchMovies>("list_movies.json");
