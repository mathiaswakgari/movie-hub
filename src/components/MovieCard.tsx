import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import "./movieCard.css";
import { Movie } from "../services/moviesService";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card maxW={"xs"} className="card">
      <Image src={movie.large_cover_image} className="image" />
      <Box className="middle">
        <Box>
          <Text
            fontSize={"4xl"}
            fontWeight={"extrabold"}
          >{`${movie.rating}/10`}</Text>
          <VStack>
            {movie.genres! &&
              movie.genres!.map((genre) => (
                <Text fontSize={"2xl"} key={genre}>
                  {genre}
                </Text>
              ))}
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
