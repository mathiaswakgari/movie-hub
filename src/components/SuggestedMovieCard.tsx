import { Card, Image } from "@chakra-ui/react";
import { Movie } from "../services/moviesService";
import FallbackLoader from "./FallbackLoader";

interface Props {
  movie: Movie;
}

const SuggestedMovieCard = ({ movie }: Props) => {
  return (
    <Card
      maxW={"xs"}
      border={"4px solid white"}
      _hover={{
        borderColor: "green",
        transitionDuration: "550ms",
      }}
      width={"125px"}
      height={"187px"}
      background={"transparent"}
    >
      <Image
        h={"full"}
        fallback={<FallbackLoader color="white" />}
        src={movie.medium_cover_image}
      />
    </Card>
  );
};

export default SuggestedMovieCard;
