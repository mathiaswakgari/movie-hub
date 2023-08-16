import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { MovieQuery } from "../App";
import { Link } from "react-router-dom";
import MovieCardSkeleton from "./MovieCardSkeleton";
import Paginate from "./Paginate";

interface Props {
  movieQuery: MovieQuery;
  onPageChange: (page: number) => void;
}

const Movies = ({ movieQuery, onPageChange }: Props) => {
  const { movies, isLoading } = useMovies(movieQuery);
  const skeletonMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (!movies)
    return (
      <Box
        w={"100vw"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Heading>Oops.... try again.</Heading>
      </Box>
    );

  return (
    <VStack>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 2,
          xl: 4,
        }}
        spacing={"10"}
        paddingBottom={"50px"}
        marginTop={"200px"}
      >
        {isLoading
          ? skeletonMovies.map((movie) => <MovieCardSkeleton key={movie} />)
          : movies.map((movie) => (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            ))}
      </SimpleGrid>
      <Paginate onPageChange={onPageChange} />
    </VStack>
  );
};

export default Movies;
