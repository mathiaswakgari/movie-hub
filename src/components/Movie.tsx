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
  const { data, isLoading } = useMovie(id!);
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
    <Box
      minHeight={"100vh"}
      width={"100%"}
      paddingX={"00px"}
      paddingTop={"50px"}
    >
      <Box
        bgImage={data?.data.movie?.background_image}
        backgroundSize={"cover"}
        minHeight={"100vh"}
      >
        <Box bgColor={"rgba(0,0,0,0.5)"} paddingTop={"100px"} minH={"100vh"}>
          <HStack
            justifyContent={"center"}
            gap={{
              base: "10",
              md: "20",
            }}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
          >
            <Box>
              <MovieCardNoHover url={data?.data.movie.large_cover_image!} />
            </Box>
            <Box
              color={"white"}
              maxW={{
                base: "300px",
                md: "600px",
                lg: "600px",
              }}
            >
              <VStack
                alignItems={{
                  base: "center",
                  md: "flex-start",
                }}
              >
                <Heading
                  fontSize={{
                    base: "1xl",
                    md: "3xl",
                  }}
                >
                  {data?.data.movie?.title}
                </Heading>
                <Text fontSize={"xl"} fontWeight={"light"}>
                  {data?.data.movie?.year}
                </Text>
                <Text
                  fontSize={"xl"}
                  fontWeight={"bold"}
                  maxW={{
                    base: "200px",
                    sm: "300px",
                    md: "300px",
                    xl: "600px",
                  }}
                >
                  {data?.data.movie?.genres!.map((genre) => (
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
                        {data?.data.movie?.rating}
                      </span>
                      /10
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </Box>
            <Box maxW={"300px"} maxH={"500px"} color={"white"}>
              <Text>Similar Movies</Text>
              <SimpleGrid columns={2} spacing={2}>
                {suggestedMovies.map((movie) => (
                  <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <SuggestedMovieCard key={movie.id} movie={movie} />
                  </Link>
                ))}
              </SimpleGrid>
            </Box>
          </HStack>
          <Box paddingY={"100px"}>
            <Text textAlign={"center"} color={"white"}>
              Previews
            </Text>
            <HStack
              overflowX={"scroll"}
              justifyContent={"center"}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
              }}
            >
              <Box>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${data?.data.movie?.yt_trailer_code}`}
                  controls
                  height={"147px"}
                  width={"350px"}
                />
              </Box>
              <Image src={data?.data.movie?.medium_screenshot_image1} />
              <Image src={data?.data.movie?.medium_screenshot_image2} />
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
            minH={"50vh"}
          >
            <HStack
              justifyContent={"space-evenly"}
              paddingX={"10px"}
              paddingTop={"10px"}
              flexDirection={{
                base: "column",
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
                <Text
                  fontSize={{
                    base: "12px",
                    sm: "19px",
                  }}
                  paddingY={5}
                  fontWeight={"light"}
                >
                  {data?.data.movie?.description_full
                    ? data?.data.movie?.description_full
                    : "No Description"}
                </Text>
              </Box>
              <Box alignSelf={"flex-start"}>
                <Heading>Top Cast</Heading>
                <Box paddingY={5}>
                  {data?.data.movie?.cast!
                    ? data?.data.movie?.cast.map((c) => (
                        <CastCard key={c.name} cast={c} />
                      ))
                    : "No cast information"}
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
