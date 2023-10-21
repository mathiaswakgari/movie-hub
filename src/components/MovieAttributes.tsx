import { Box, VStack, Text, Heading, HStack } from "@chakra-ui/react";
import { LiaImdb } from "react-icons/lia";
import { Movie } from "../services/moviesService";

interface Props {
  movie: Movie;
}

const MovieAttributes = ({ movie }: Props) => {
  return (
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
          {movie?.title}
        </Heading>
        <Text fontSize={"xl"} fontWeight={"light"}>
          {movie?.year}
        </Text>
        <Text
          fontSize={"xl"}
          fontWeight={"thin"}
          maxW={{
            base: "200px",
            sm: "300px",
            md: "300px",
            xl: "600px",
          }}
        >
          {movie?.genres!.map((genre) => (
            <span key={genre}>
              {genre}
              {"    "}
            </span>
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
  );
};

export default MovieAttributes;
