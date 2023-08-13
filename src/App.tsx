import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Movies from "./components/Movies";
import SideBar from "./components/SideBar";

export interface MovieQuery {
  searchTerm: string;
  selectedGenre: string;
  selectedRating: number;
}

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);

  return (
    <Grid
      templateAreas={{
        base: `"navbar"
              "main"`,
        lg: `"navbar navbar"
            "sidebar main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem area={"navbar"}>
        <NavBar
          onSearch={(searchTerm) => {
            setMovieQuery({ ...movieQuery, searchTerm });
          }}
        />
      </GridItem>
      <GridItem
        area={"main"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Movies movieQuery={movieQuery} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"sidebar"} bgColor={"gray"}>
          <SideBar
            onRatingChange={(selectedRating) => {
              setMovieQuery({ ...movieQuery, selectedRating });
            }}
            onSelectGenre={(selectedGenre) => {
              setMovieQuery({ ...movieQuery, selectedGenre });
            }}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}
export default App;
