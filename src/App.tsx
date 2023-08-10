import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState("Hello");

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
            setSearchTerm(searchTerm);
          }}
        />
      </GridItem>
      <GridItem area={"main"} bgColor={"black"}>
        Main
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
