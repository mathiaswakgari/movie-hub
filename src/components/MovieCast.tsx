import { Heading, Box } from "@chakra-ui/react";
import CastCard from "./CastCard";
import { Cast } from "../services/moviesService";

interface Props {
  cast?: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <Box
      alignSelf={"flex-start"}
      w={{
        base: "100%",
        md: "300px",
        lg: "350px",
        xl: "500px",
      }}
    >
      <Heading>Top Cast</Heading>
      <Box paddingY={5}>
        {cast!
          ? cast.map((c) => <CastCard key={c.name} cast={c} />)
          : "No cast information"}
      </Box>
    </Box>
  );
};

export default MovieCast;
