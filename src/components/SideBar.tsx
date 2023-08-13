import { MovieQuery } from "../App";
import { Box, HStack, Heading, VStack, Text } from "@chakra-ui/react";
import GenreSelector from "./GenreSelector";
import RatingSelector, { Rating } from "./RatingSelector";

interface Props {
  onSelectGenre: (genre: string) => void;
  onRatingChange: (rating: number) => void;
}

const SideBar = ({ onSelectGenre, onRatingChange }: Props) => {
  return (
    <Box>
      <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"medium"}>
        Browse Movies
      </Text>
      <VStack>
        <GenreSelector onGenreChange={onSelectGenre} />
        <RatingSelector onRatingChange={onRatingChange} />
      </VStack>
    </Box>
  );
};

export default SideBar;
