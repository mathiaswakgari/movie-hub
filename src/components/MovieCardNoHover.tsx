import { Card, Image } from "@chakra-ui/react";
import FallbackLoader from "./FallbackLoader";

interface Props {
  url: string;
}

const MovieCardNoHover = ({ url }: Props) => {
  return (
    <Card
      width={{
        base: "200px",
        md: "200px",
        lg: "250px",
        xl: "300px",
      }}
      height={{
        base: "288px",
        md: "288px",
        lg: "430px",
        xl: "438px",
      }}
      border={"4px white solid"}
      background={"transparent"}
    >
      <Image
        src={url}
        height={"full"}
        fallback={<FallbackLoader color="white" />}
        className="image"
        background={"transparent"}
      />
    </Card>
  );
};

export default MovieCardNoHover;
