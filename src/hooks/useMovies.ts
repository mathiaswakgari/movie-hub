import apiClinet from "../services/api-clinet";
import { MovieQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clinet";

export interface FetchMovies {
  data: {
    movie_count: number;
    movies: Array<Movie>;
  };
}
export interface Cast {
  name: string;
  character_name: string;
  url_small_image: string;
}
export interface Movie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  summary: string;
  genres?: Array<string>;
  background_image: string;
  small_cover_image: string;
  large_cover_image: string;
  medium_cover_image: string;
  yt_trailer_code: string;
  large_screenshot_image1: string;
  large_screenshot_image2: string;
  medium_screenshot_image1: string;
  medium_screenshot_image2: string;
  description_full: string;
  cast?: Array<Cast>;
}

const useMovies = (movieQuery: MovieQuery) => {
  const apiClient = new APIClient<FetchMovies>("list_movies.json");

  return useQuery<FetchMovies, Error, FetchMovies, (string | MovieQuery)[]>({
    queryKey: ["movies", movieQuery],
    queryFn: () => {
      return apiClient.getAll({
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
