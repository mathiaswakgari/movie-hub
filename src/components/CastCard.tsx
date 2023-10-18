import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { Cast } from "../services/moviesService";

interface Props {
  cast: Cast;
}

const CastCard = ({ cast }: Props) => {
  return (
    <Box paddingBottom={5}>
      <HStack>
        <Avatar name={cast.name} src={cast.url_small_image} />
        <Text>
          <span
            style={{
              fontWeight: "lighter",
            }}
          >
            {cast.name}
          </span>{" "}
          as {cast.character_name}
        </Text>
      </HStack>
      <hr></hr>
    </Box>
  );
};

export default CastCard;
