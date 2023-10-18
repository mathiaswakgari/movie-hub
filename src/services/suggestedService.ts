import APIClient from "./api-clinet";
import { FetchMovies } from "./moviesService";

export default (id: string) =>
  new APIClient<FetchMovies>(`movie_suggestions.json?movie_id=${id}`);
