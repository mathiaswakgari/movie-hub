import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
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
        </Box>
      </Box>

      <CardBody>
        <Heading fontSize={"2xl"} textOverflow={"ellipsis"}>
          {movie.title}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
