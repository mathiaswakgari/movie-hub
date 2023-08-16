import { useEffect, useState } from "react";
import { Movie } from "./useMovies";
import { FetchMovies } from "./useMovies";
import apiClinet from "../services/api-clinet";

const useSuggestedMovies = (id: string) => {
  const [suggestedMovies, setSuggestedMovies] = useState<Array<Movie>>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClinet
      .get<FetchMovies>(`movie_suggestions.json?movie_id=${id}`)
      .then((res) => setSuggestedMovies(res.data.data.movies))
      .catch((e) => setError(e.message));

    return () => controller.abort();
  }, []);
  return {
    suggestedMovies,
    error,
  };
};

export default useSuggestedMovies;
