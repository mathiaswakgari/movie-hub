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
  url: string;
}

const MovieCardNoHover = ({ url }: Props) => {
  return (
    <Card
      width={{
        sm: "150px",
        md: "200px",
        lg: "250px",
        xl: "300px",
      }}
      border={"4px white solid"}
    >
      <Image src={url} className="image" />
    </Card>
  );
};

export default MovieCardNoHover;
