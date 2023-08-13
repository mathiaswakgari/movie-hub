import { useEffect, useState } from "react";
import apiClinet from "../services/api-clinet";
import { MovieQuery } from "../App";

export interface FetchMovies {
  data: {
    movie_count: number;
    movies: Array<Movie>;
  };
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
  genres: Array<string>;
  background_image: string;
  small_cover_image: string;
  large_cover_image: string;
  medium_cover_image: string;
}

const useMovies = (movieQuery: MovieQuery) => {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClinet
      .get<FetchMovies>("list_movies.json", {
        signal: controller.signal,
        params: {
          query_term: movieQuery.searchTerm,
          genre: movieQuery.selectedGenre,
          minimum_rating: movieQuery.selectedRating,
          sort_by: movieQuery.selectedOrder,
        },
      })
      .then((res) => {
        setMovies(res.data.data.movies);
      });

    return () => controller.abort();
  }, [movieQuery]);
  return {
    movies,
    setMovies,
  };
};
export default useMovies;
