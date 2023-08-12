import { useEffect, useState } from "react";
import apiClinet from "../services/api-clinet";

interface FetchMovies {
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
  release_year: number;
  rating: number;
  runtime: number;
  summary: string;
  background_image: string;
}

const useMovies = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClinet.get<FetchMovies>("list_movies.json").then((res) => {
      setMovies(res.data.data.movies);
    });

    return () => controller.abort();
  }, []);
  return {
    movies,
    setMovies,
  };
};
export default useMovies;
