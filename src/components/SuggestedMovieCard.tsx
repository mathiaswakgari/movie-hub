import { Card, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const SuggestedMovieCard = ({ movie }: Props) => {
  return (
    <Card maxW={"xs"} border={"4px solid white"}>
      <Image width={"125px"} height={"187px"} src={movie.medium_cover_image} />
    </Card>
  );
};

export default SuggestedMovieCard;
