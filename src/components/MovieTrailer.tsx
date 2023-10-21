import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

interface Props {
  url?: string;
}

const MovieTrailer = ({ url }: Props) => {
  return (
    <Box paddingX={3} maxWidth={"4xl"} width={"100%"}>
      <ReactPlayer
        width={"100%"}
        url={`https://www.youtube.com/watch?v=${url}`!}
        controls
      />
    </Box>
  );
};

export default MovieTrailer;
