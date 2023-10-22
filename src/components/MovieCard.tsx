import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import "./movieCard.css";
import { Movie } from "../services/moviesService";
import FallbackLoader from "./FallbackLoader";
import { FaImdb } from "react-icons/fa";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card maxW={"xs"} className="card" borderRadius={2}>
      <Box height={"480px"} w={"full"} background={"transparent"}>
        <Image
          width={"full"}
          height={"full"}
          src={movie.large_cover_image}
          className="image"
          fallback={<FallbackLoader />}
        />
      </Box>

      <Box className="middle">
        <Box>
          <HStack>
            <FaImdb
              style={{
                fontSize: "50px",
              }}
            />
            <Text
              fontSize={"4xl"}
              paddingTop={3}
              fontWeight={"extrabold"}
            >{`${movie.rating}`}</Text>
          </HStack>

          <VStack>
            {movie.genres! &&
              movie.genres!.map(
                (genre, index) =>
                  index < 4 && (
                    <Text fontSize={"2xl"} key={genre}>
                      {genre}
                    </Text>
                  )
              )}
          </VStack>
        </Box>
      </Box>
      <CardBody>
        <Heading noOfLines={1} fontWeight={"semibold"} fontSize={"2xl"}>
          {movie.title}
        </Heading>
        <Text>{movie.year}</Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
