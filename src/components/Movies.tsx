import { SimpleGrid, VStack } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import MovieCardSkeleton from "./MovieCardSkeleton";
import Paginate from "./Paginate";
import Error from "./Error";

const Movies = () => {
  const { data, isLoading, isError } = useMovies();
  const skeletonMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (isError) {
    return <Error />;
  }

  return (
    <VStack>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={"10"}
        paddingBottom={"50px"}
        marginTop={"200px"}
      >
        {isLoading
          ? skeletonMovies.map((movie) => <MovieCardSkeleton key={movie} />)
          : data?.data?.movies?.map((movie) => (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            ))}
      </SimpleGrid>
      <Paginate />
    </VStack>
  );
};

export default Movies;
