import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clinet";
import { FetchMovies } from "../services/moviesService";

const useSuggestedMovies = (id: string) => {
  const client = new APIClient<FetchMovies>(
    `movie_suggestions.json?movie_id=${id}`
  );
  return useQuery({
    queryKey: ["suggestedMovies", id],
    queryFn: client.getAll,
    staleTime: 60 * 1000, // 5 mins
  });
};

export default useSuggestedMovies;
