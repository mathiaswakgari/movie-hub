import { Link, useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { LiaImdb } from "react-icons/lia";
import MovieCardNoHover from "./MovieCardNoHover";
import useSuggestedMovies from "../hooks/useSuggestedMovies";
import SuggestedMovieCard from "./SuggestedMovieCard";
import ReactPlayer from "react-player";
import CastCard from "./CastCard";
// import { Movie } from "../hooks/useMovies";

const Movie = () => {
  const { id } = useParams();
  const { movie, isLoading } = useMovie(id!);
  const { suggestedMovies } = useSuggestedMovies(id!);

  if (!isLoading)
    return (
      <Box w={"100%"} h={"100vh"}>
        <HStack
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
          h={"100%"}
        >
          <Spinner />
          <Text>Loading...</Text>
        </HStack>
      </Box>
    );

  return (
    <Box
      bgImage={movie?.background_image}
      backgroundSize={"cover"}
      height={"100%"}
      width={"100%"}
      paddingX={"100px"}
      paddingY={"100px"}
    >
      <HStack
        justifyContent={"center"}
        gap={{
          sm: "10",
          md: "20",
        }}
        flexDirection={{
          sm: "column",
          lg: "row",
        }}
      >
        <Box>
          <MovieCardNoHover url={movie?.large_cover_image!} />
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
        <Box maxW={"300px"} maxH={"500px"} color={"white"}>
          <Text>Similar Movies</Text>
          <SimpleGrid
            columns={{
              sm: 1,
              md: 2,
              lg: 2,
              xl: 2,
            }}
            spacing={2}
          >
            {suggestedMovies.map((movie) => (
              <Link to={`/movies/${movie.id}`}>
                <SuggestedMovieCard key={movie.id} movie={movie} />
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      </HStack>
      <Box paddingY={10}>
        <Text textAlign={"center"}>Previews</Text>
        <HStack overflowX={"scroll"} justifyContent={"center"}>
          <Box>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${movie?.yt_trailer_code}`}
              controls
              height={"147px"}
              width={"350px"}
            />
          </Box>
          <Image src={movie?.medium_screenshot_image1} />
          <Image src={movie?.medium_screenshot_image2} />
        </HStack>
      </Box>
      <Box>
        <HStack justifyContent={"space-between"}>
          <Box maxW={"60%"}>
            <Heading>Description</Heading>
            <Text paddingY={5} fontWeight={"light"}>
              {movie?.description_full}
            </Text>
          </Box>
          <Box alignSelf={"flex-start"}>
            <Heading>Top Cast</Heading>
            <Box paddingY={5}>
              {movie?.cast.map((c) => (
                <CastCard cast={c} />
              ))}
            </Box>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Movie;
