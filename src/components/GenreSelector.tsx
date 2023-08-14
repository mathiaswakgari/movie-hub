import { HStack, Select, Text } from "@chakra-ui/react";
import { genres } from "../data/Genres";
interface Props {
  onGenreChange: (genre: string) => void;
  selectedGenre: string;
}

const GenreSelector = ({ onGenreChange, selectedGenre }: Props) => {
  return (
    <HStack gap={"5"}>
      <Text>Genre:</Text>
      <Select
        placeholder={selectedGenre ? selectedGenre : "All"}
        width={"150px"}
        onChange={(e) => onGenreChange(e.currentTarget.value)}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Select>
    </HStack>
  );
};

export default GenreSelector;
