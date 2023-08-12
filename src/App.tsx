import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import Movies from "./components/Movies";

export interface MovieQuery {
  searchTerm: string;
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
        <Movies />
      </GridItem>
      <Show above="lg">
        <GridItem area={"sidebar"} bgColor={"blue"}>
          SideBar
        </GridItem>
      </Show>
    </Grid>
  );
}
export default App;
