import { useEffect, useState } from "react";
import { Movie } from "./useMovies";
import apiClinet from "../services/api-clinet";

interface FetchMovie {
  data: {
    movie: Movie;
  };
}

const useMovie = (id: string) => {
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClinet
      .get<FetchMovie>(
        `movie_details.json?movie_id=${id}&with_images=true&with_cast=true`,
        {
          signal: controller.signal,
        }
      )
      .then((res) => {
        setIsLoading(false);
        setMovie(res.data.data.movie);
        console.log(res.data.data.movie);
      })
      .catch((e) => setError(e.message));

    return () => controller.abort();
  }, [id]);

  return {
    movie,
    isLoading,
    error,
  };
};
export default useMovie;
