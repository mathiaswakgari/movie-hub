import { Movie } from "../services/moviesService";
import APIClient from "../services/api-clinet";
import { useQuery } from "@tanstack/react-query";

interface FetchMovie {
  data: {
    movie: Movie;
  };
}

const useMovie = (id: string) => {
  const client = new APIClient<FetchMovie>(
    `movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
  );
  const fetchMovie = () => client.getAll();

  return useQuery({
    queryKey: ["movie", id],
    queryFn: fetchMovie,
    staleTime: 10 * 1000, // 5 mins
  });
};
export default useMovie;
