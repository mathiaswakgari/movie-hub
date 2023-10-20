import { HStack, Select, Text } from "@chakra-ui/react";
import { genres } from "../data/Genres";
import useMovieQueryStore from "../store";

const GenreSelector = () => {
  const selectedGenre = useMovieQueryStore((s) => s.movieQuery.selectedGenre);
  const setSelectedGenre = useMovieQueryStore((s) => s.setSelectedGenre);

  return (
    <HStack gap={"5"}>
      <Text
        marginY={"5px"}
        fontSize={{
          base: "10px",
          md: "15px",
        }}
      >
        Genre:
      </Text>
      <Select
        placeholder={selectedGenre ? selectedGenre : "All"}
        width={{
          base: "100px",
          sm: "150px",
        }}
        fontSize={{
          base: "10px",
          md: "15px",
        }}
        onChange={(e) => setSelectedGenre(e.currentTarget.value)}
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
