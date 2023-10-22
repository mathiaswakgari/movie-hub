import { useQuery } from "@tanstack/react-query";
import moviesService, { FetchMovies } from "../services/moviesService";
import useMovieQueryStore from "../store";

const useMovies = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);

  return useQuery<FetchMovies, Error, FetchMovies>({
    queryKey: ["movies", movieQuery],
    queryFn: () => {
      return moviesService.getAll({
        params: {
          query_term: movieQuery.searchTerm,
          genre: movieQuery.selectedGenre,
          minimum_rating: movieQuery.selectedRating,
          sort_by: movieQuery.selectedOrder,
          limit: 8,
          page: movieQuery.page,
        },
      });
    },

    staleTime: 10 * 1000, // 5 mins
  });
};
export default useMovies;
