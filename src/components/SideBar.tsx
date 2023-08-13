import { MovieQuery } from "../App";
import { Box, HStack, Heading, VStack, Text } from "@chakra-ui/react";
import GenreSelector from "./GenreSelector";
import RatingSelector, { Rating } from "./RatingSelector";
import OrderSelector from "./OrderSelector";

interface Props {
  onSelectGenre: (genre: string) => void;
  onRatingChange: (rating: number) => void;
  onOrderChange: (order: string) => void;
}

const SideBar = ({ onSelectGenre, onRatingChange, onOrderChange }: Props) => {
  return (
    <Box>
      <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"medium"}>
        Browse Movies
      </Text>
      <VStack>
        <GenreSelector onGenreChange={onSelectGenre} />
        <RatingSelector onRatingChange={onRatingChange} />
        <OrderSelector onOrderChange={onOrderChange} />
      </VStack>
    </Box>
  );
};

export default SideBar;
