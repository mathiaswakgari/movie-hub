import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Footer from "./components/Footer";

function App() {
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
          <NavBar />
        </GridItem>
        <GridItem
          area={"main"}
          marginTop={"0"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Routes>
            <Route path="/" element={<Movies />} />
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
