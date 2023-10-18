import { useQuery } from "@tanstack/react-query";
import suggestedService from "../services/suggestedService";

const useSuggestedMovies = (id: string) => {
  return useQuery({
    queryKey: ["suggestedMovies", id],
    queryFn: () => suggestedService(id).getAll(),
    staleTime: 60 * 1000, // 5 mins
  });
};

export default useSuggestedMovies;
