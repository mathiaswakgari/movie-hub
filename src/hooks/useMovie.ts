import { useEffect, useState } from "react";
import { Movie } from "./useMovies";
import apiClinet from "../services/api-clinet";

const useMovie = (id: string) => {
  const [movie, setMovie] = useState(<Array<Movie>>[]);
  useEffect(() => {
    const controller = new AbortController();
    apiClinet
      .get(`movie_details.json?movie_id=${id}`, {
        signal: controller.signal,
      })
      .then((res) => console.log(res.data));

    return () => controller.abort();
  }, []);

  return {
    movie,
  };
};
export default useMovie;
