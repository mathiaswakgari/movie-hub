import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { LiaImdb } from "react-icons/lia";
import MovieCardNoHover from "./MovieCardNoHover";
import useSuggestedMovies from "../hooks/useSuggestedMovies";
import SuggestedMovieCard from "./SuggestedMovieCard";
// import { Movie } from "../hooks/useMovies";

const Movie = () => {
  const { id } = useParams();
  const { movie } = useMovie(id!);
  const { suggestedMovies } = useSuggestedMovies(id!);
  return (
    <Box
      bgImage={movie?.background_image}
      backgroundSize={"cover"}
      minH={"100vh"}
      minW={"100%"}
      paddingX={"100px"}
      paddingY={"100px"}
    >
      <HStack
        style={{
          backdropFilter: "blur(10px)",
        }}
        justifyContent={"center"}
        gap={{
          sm: "10",
          md: '"20"',
        }}
        flexDirection={{
          sm: "column",
          md: "row",
        }}
      >
        <Box>
          <MovieCardNoHover movie={movie!} />
        </Box>
        <Box color={"white"} maxW={"600px"}>
          <VStack alignItems={"flex-start"}>
            <Heading fontSize={"3xl"}>{movie?.title}</Heading>
            <Text fontSize={"xl"} fontWeight={"light"}>
              {movie?.year}
            </Text>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              {movie?.genres.map((genre) => (
                <span key={genre}>{genre}/</span>
              ))}
            </Text>
            <Box>
              <HStack>
                <LiaImdb
                  style={{
                    fontSize: "55px",
                    color: "gold",
                  }}
                />
                <Text fontWeight={"light"}>
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "25px",
                    }}
                  >
                    {movie?.rating}
                  </span>
                  /10
                </Text>
              </HStack>
            </Box>
          </VStack>
        </Box>
        <Box maxW={"300px"} color={"white"}>
          <Text>Similar Movies</Text>
          <HStack flexWrap={"wrap"}>
            {suggestedMovies.map((movie) => (
              <SuggestedMovieCard movie={movie} />
            ))}
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Movie;
