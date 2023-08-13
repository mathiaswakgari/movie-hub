import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Movies from "./components/Movies";
import SideBar from "./components/SideBar";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";

export interface MovieQuery {
  searchTerm: string;
  selectedGenre: string;
  selectedRating: number;
  selectedOrder: string;
}

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);

  return (
    <BrowserRouter>
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
        <Box>
          <GridItem
            area={"main"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Routes>
              <Route path="/" element={<Movies movieQuery={movieQuery} />} />
              <Route path="/movies/:id" element={<Movie />} />
            </Routes>
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
                onOrderChange={(selectedOrder) => {
                  setMovieQuery({ ...movieQuery, selectedOrder });
                }}
              />
            </GridItem>
          </Show>
        </Box>
      </Grid>
    </BrowserRouter>
  );
}
export default App;
