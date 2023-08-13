import { Box, HStack, Heading, VStack, Text } from "@chakra-ui/react";
import GenreSelector from "./GenreSelector";
import RatingSelector, { Rating } from "./RatingSelector";
import OrderSelector from "./OrderSelector";
import "./NavBar.css";

interface Props {
  onSelectGenre: (genre: string) => void;
  onRatingChange: (rating: number) => void;
  onOrderChange: (order: string) => void;
}

const SideBar = ({ onSelectGenre, onRatingChange, onOrderChange }: Props) => {
  return (
    <Box paddingBottom={5} className="smooth">
      <Text
        textAlign={"center"}
        fontSize={"2xl"}
        fontWeight={"medium"}
        paddingY={2}
      >
        Browse Movies
      </Text>
      <HStack gap={10} paddingY={2}>
        <GenreSelector onGenreChange={onSelectGenre} />
        <RatingSelector onRatingChange={onRatingChange} />
        <OrderSelector onOrderChange={onOrderChange} />
      </HStack>
    </Box>
  );
};

export default SideBar;
