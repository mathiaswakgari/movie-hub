import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Image src={movie.large_cover_image} />
      <CardBody>
        <Heading fontSize={"2xl"} whiteSpace={"nowrap"}>
          {movie.title}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
