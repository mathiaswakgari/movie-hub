import { SimpleGrid } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { MovieQuery } from "../App";
import { Link } from "react-router-dom";
import MovieCardSkeleton from "./MovieCardSkeleton";

interface Props {
  movieQuery: MovieQuery;
}

const Movies = ({ movieQuery }: Props) => {
  const { movies, isLoading } = useMovies(movieQuery);
  const skeletonMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 2,
        xl: 4,
      }}
      spacing={"10"}
      paddingBottom={"50px"}
    >
      {isLoading
        ? skeletonMovies.map((movie) => <MovieCardSkeleton key={movie} />)
        : movies.map((movie) => (
            <Link to={`/movies/${movie.id}`}>
              <MovieCard key={movie.id} movie={movie} />
            </Link>
          ))}
    </SimpleGrid>
  );
};

export default Movies;
