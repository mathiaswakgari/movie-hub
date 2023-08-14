import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import "./movieCard.css";

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
            {movie.genres.map((genre) => (
              <Text fontSize={"2xl"}>{genre}</Text>
            ))}
          </VStack>
        </Box>
      </Box>
      <CardBody>
        <Heading noOfLines={1} fontSize={"2xl"}>
          {movie.title}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
