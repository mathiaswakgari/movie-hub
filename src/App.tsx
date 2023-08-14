import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Movies from "./components/Movies";
import "./components/NavBar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          lg: `"navbar"
            "main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "1fr",
        }}
      >
        <GridItem
          area={"navbar"}
          position={"fixed"}
          width={"100%"}
          zIndex={3}
          paddingBottom={1}
          className="smooth"
          bg={"chakra-body-bg"}
        >
          <NavBar
            onSearch={(searchTerm) => {
              setMovieQuery({ ...movieQuery, searchTerm });
            }}
            onOrderChange={(selectedOrder) => {
              setMovieQuery({ ...movieQuery, selectedOrder });
            }}
            onRatingChange={(selectedRating) => {
              setMovieQuery({ ...movieQuery, selectedRating });
            }}
            onSelectGenre={(selectedGenre) => {
              setMovieQuery({ ...movieQuery, selectedGenre });
            }}
          />
        </GridItem>
        <GridItem
          area={"main"}
          marginTop={"100"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Routes>
            <Route path="/" element={<Movies movieQuery={movieQuery} />} />
            <Route path="/movies/:id" element={<Movie />} />
          </Routes>
        </GridItem>
      </Grid>
    </BrowserRouter>
  );
}
export default App;
