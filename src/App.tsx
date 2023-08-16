import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Movies from "./components/Movies";
import "./components/NavBar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Footer from "./components/Footer";

export interface MovieQuery {
  searchTerm: string;
  selectedGenre: string;
  selectedRating: number;
  selectedOrder: string;
  page: number;
}

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);
  const resetQuery = {
    searchTerm: "",
    selectedGenre: "",
    selectedRating: 0,
    selectedOrder: "",
    page: 1,
  };

  return (
    <BrowserRouter>
      <Grid
        templateAreas={{
          base: `"navbar"
              "main"
              "footer"
              `,
          lg: `"navbar"
            "main"
            "footer"
            `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "1fr",
        }}
      >
        <GridItem area={"navbar"}>
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
            onLogoClick={() => {
              setMovieQuery(resetQuery);
            }}
            movieQuery={movieQuery}
          />
        </GridItem>
        <GridItem
          area={"main"}
          marginTop={"0"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Movies
                  movieQuery={movieQuery}
                  onPageChange={(page: number) => {
                    setMovieQuery({ ...movieQuery, page: page + 1 });
                  }}
                />
              }
            />
            <Route path="/movies/:id" element={<Movie />} />
          </Routes>
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </BrowserRouter>
  );
}
export default App;
