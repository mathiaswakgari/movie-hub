import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { LiaImdb } from "react-icons/lia";
import MovieCardNoHover from "./MovieCardNoHover";
import ReactPlayer from "react-player";
import CastCard from "./CastCard";
import Error from "./Error";
import SimilarMovies from "./SimilarMovies";
import MovieAttributes from "./MovieAttributes";
import MovieTrailer from "./MovieTrailer";
import MovieScreenshots from "./MovieScreenshots";
import MovieCast from "./MovieCast";
import MovieDescription from "./MovieDescription";
// import { Movie } from "../hooks/useMovies";

const Movie = () => {
  const { id } = useParams();
  const { data, isLoading } = useMovie(id!);

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

  if (!data?.data) return <Error />;

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
            <MovieAttributes movie={data?.data?.movie} />
            <SimilarMovies id={id!} />
          </HStack>
          <Box paddingY={"100px"}>
            <Text textAlign={"center"} color={"white"}>
              Previews
            </Text>
            <VStack>
              {data?.data.movie.yt_trailer_code && (
                <MovieTrailer url={data?.data.movie?.yt_trailer_code} />
              )}
              {data?.data.movie.large_screenshot_image1 &&
                data?.data.movie.large_screenshot_image2 && (
                  <MovieScreenshots
                    screenshot1={data?.data.movie?.large_screenshot_image1}
                    screenshot2={data?.data.movie?.large_screenshot_image2}
                  />
                )}
            </VStack>
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
              <MovieDescription
                description_full={data?.data.movie?.description_full!}
              />
              <MovieCast cast={data?.data.movie?.cast!} />
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Movie;
