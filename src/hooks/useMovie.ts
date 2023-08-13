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
  useEffect(() => {
    const controller = new AbortController();
    apiClinet
      .get<FetchMovie>(
        `movie_details.json?movie_id=${id}&with_images=true&with_cast=true`,
        {
          signal: controller.signal,
        }
      )
      .then((res) => {
        setMovie(res.data.data.movie);
        console.log(res.data.data.movie);
      });

    return () => controller.abort();
  }, []);

  return {
    movie,
  };
};
export default useMovie;
