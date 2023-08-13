import { Link, useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import { Box, HStack, Heading, Text, VStack, Image } from "@chakra-ui/react";
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

  if (isLoading) return null;

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
        <Box maxW={"300px"} color={"white"}>
          <Text>Similar Movies</Text>
          <HStack flexWrap={"wrap"}>
            {suggestedMovies.map((movie) => (
              <Link to={`/movies/${movie.id}`}>
                <SuggestedMovieCard key={movie.id} movie={movie} />
              </Link>
            ))}
          </HStack>
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
