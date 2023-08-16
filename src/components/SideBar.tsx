import { Box, HStack } from "@chakra-ui/react";
import GenreSelector from "./GenreSelector";
import RatingSelector from "./RatingSelector";
import OrderSelector from "./OrderSelector";
import "./NavBar.css";
import { MovieQuery } from "../App";

interface Props {
  onSelectGenre: (genre: string) => void;
  onRatingChange: (rating: number) => void;
  onOrderChange: (order: string) => void;
  movieQuery: MovieQuery;
}

const SideBar = ({
  onSelectGenre,
  onRatingChange,
  onOrderChange,
  movieQuery,
}: Props) => {
  return (
    <Box paddingBottom={1} className="smooth">
      <HStack
        gap={10}
        paddingY={2}
        justifyContent={"center"}
        flexDirection={{
          sm: "column",
          md: "row",
        }}
      >
        <GenreSelector
          onGenreChange={onSelectGenre}
          selectedGenre={movieQuery.selectedGenre}
        />
        <RatingSelector
          onRatingChange={onRatingChange}
          selectedRating={movieQuery.selectedRating}
        />
        <OrderSelector
          onOrderChange={onOrderChange}
          selectedOrder={movieQuery.selectedOrder}
        />
      </HStack>
    </Box>
  );
};

export default SideBar;
