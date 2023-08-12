import { SimpleGrid } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const Movies = () => {
  const { movies, setMovies } = useMovies();

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
      }}
      spacing={"20px"}
    >
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default Movies;
