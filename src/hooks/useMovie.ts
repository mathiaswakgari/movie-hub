import { useQuery } from "@tanstack/react-query";
import movieService from "../services/movieService";

const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => movieService(id).getAll(),
    staleTime: 10 * 1000, // 5 mins
  });
};
export default useMovie;
