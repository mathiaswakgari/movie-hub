import { SimpleGrid } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { MovieQuery } from "../App";
import { Link } from "react-router-dom";

interface Props {
  movieQuery: MovieQuery;
}

const Movies = ({ movieQuery }: Props) => {
  const { movies, setMovies } = useMovies(movieQuery);

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 2,
        xl: 4,
      }}
      spacing={"10"}
    >
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`}>
          <MovieCard key={movie.id} movie={movie} />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default Movies;