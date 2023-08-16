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

  if (isLoading)
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
    <Box height={"100%"} width={"100%"} paddingX={"00px"} paddingTop={"50px"}>
      <Box
        bgImage={movie?.background_image}
        backgroundSize={"cover"}
        height={{
          lg: "100vh",
        }}
        minHeight={{
          sm: "100vh",
          md: "100vh",
        }}
      >
        <Box bgColor={"rgba(0,0,0,0.5)"} paddingTop={"100px"} height={"100%"}>
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
                <Text
                  fontSize={"xl"}
                  fontWeight={"bold"}
                  maxW={{
                    sm: "300px",
                    md: "300px",
                    xl: "600px",
                  }}
                >
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
                  sm: 2,
                  md: 2,
                  lg: 2,
                  xl: 2,
                }}
                spacing={2}
              >
                {suggestedMovies.map((movie) => (
                  <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <SuggestedMovieCard key={movie.id} movie={movie} />
                  </Link>
                ))}
              </SimpleGrid>
            </Box>
          </HStack>
          <Box paddingY={"100px"}>
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
        </Box>
      </Box>
      <Box>
        <Box>
          <Box
            bg={"chakra-body-bg"}
            color={"chakra-body-text"}
            display={"flex"}
            justifyContent={"center"}
          >
            <HStack
              justifyContent={"space-evenly"}
              paddingX={"10px"}
              paddingTop={"10px"}
              flexDirection={{
                sm: "column",
                md: "row",
              }}
              width={"100%"}
            >
              <Box
                maxW={{
                  sm: "80%",
                  md: "50%",
                  lg: "60%",
                }}
                alignSelf={"flex-start"}
              >
                <Heading>Description</Heading>
                <Text paddingY={5} fontWeight={"light"}>
                  {movie?.description_full
                    ? movie?.description_full
                    : "No Description"}
                </Text>
              </Box>
              <Box alignSelf={"flex-start"}>
                <Heading>Top Cast</Heading>
                <Box paddingY={5}>
                  {movie?.cast
                    ? movie?.cast.map((c) => <CastCard key={c.name} cast={c} />)
                    : "No cast"}
                </Box>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Movie;
