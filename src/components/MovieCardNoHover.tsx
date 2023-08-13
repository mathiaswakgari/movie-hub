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

interface Props {
  movie: Movie;
}

const MovieCardNoHover = ({ movie }: Props) => {
  return (
    <Card
      width={{
        sm: "150px",
        md: "300px",
      }}
      border={"4px white solid"}
    >
      <Image src={movie.large_cover_image} className="image" />
    </Card>
  );
};

export default MovieCardNoHover;
