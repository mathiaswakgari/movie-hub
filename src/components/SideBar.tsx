import { MovieQuery } from "../App";
import { Box, HStack, Heading, VStack, Text } from "@chakra-ui/react";
import GenreSelector from "./GenreSelector";

interface Props {
  onSelectGenre: (genre: string) => void;
}

const SideBar = ({ onSelectGenre }: Props) => {
  return (
    <Box>
      <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"medium"}>
        Browse Movies
      </Text>
      <VStack>
        <GenreSelector onGenreChange={onSelectGenre} />
      </VStack>
    </Box>
  );
};

export default SideBar;
