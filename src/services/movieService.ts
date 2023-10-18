import APIClient from "./api-clinet";
import { Movie } from "./moviesService";

interface FetchMovie {
  data: {
    movie: Movie;
  };
}

export default (id: string) =>
  new APIClient<FetchMovie>(
    `movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
  );
