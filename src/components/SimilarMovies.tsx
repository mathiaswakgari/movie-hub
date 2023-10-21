import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import SuggestedMovieCard from "./SuggestedMovieCard";
import useSuggestedMovies from "../hooks/useSuggestedMovies";
import { Link } from "react-router-dom";

interface Props {
  id: string;
}

const SimilarMovies = ({ id }: Props) => {
  const { data: suggestedMovies } = useSuggestedMovies(id!);
  return (
    <Box maxW={"300px"} maxH={"500px"} color={"white"}>
      <Text>Similar Movies</Text>
      <SimpleGrid columns={2} spacing={2}>
        {suggestedMovies?.data.movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <SuggestedMovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SimilarMovies;
