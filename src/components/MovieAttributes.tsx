import { Box, VStack, Text, Heading, HStack } from "@chakra-ui/react";
import { FaImdb, FaRegCalendarAlt } from "react-icons/fa";
import { PiPopcornBold } from "react-icons/pi";
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
        <Box>
          <HStack h={"full"} w={"full"}>
            <FaRegCalendarAlt
              style={{
                fontSize: "30px",
                color: "teal",
              }}
            />
            <Text fontSize={"2xl"} paddingTop={4} fontWeight={"light"}>
              {movie?.year}
            </Text>
          </HStack>
        </Box>
        <Box>
          <HStack h={"full"} w={"full"}>
            <PiPopcornBold
              style={{
                fontSize: "30px",
                color: "pink",
              }}
            />
            <Text
              fontSize={"xl"}
              paddingTop={4}
              fontWeight={"thin"}
              maxW={{
                base: "100px",
                sm: "100px",
                md: "300px",
                xl: "600px",
              }}
            >
              {movie?.genres!.map((genre) => (
                <span key={genre}>
                  {genre}

                  {movie?.genres!.length - 1 !==
                    movie?.genres!.indexOf(genre) && ", "}
                </span>
              ))}
            </Text>
          </HStack>
        </Box>

        <Box>
          <HStack h={"full"} w={"full"}>
            <FaImdb
              style={{
                fontSize: "65px",
                color: "gold",
              }}
            />
            <Text
              paddingTop={4}
              fontFamily={"Poppins"}
              fontWeight={"bold"}
              fontSize={"30px"}
            >
              {movie?.rating}
            </Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default MovieAttributes;
