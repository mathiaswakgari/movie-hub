import { Grid, GridItem } from "@chakra-ui/react";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <Grid
      templateAreas={{
        base: `
              "main"
              
              `,
        lg: `
            "main"
            
            `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      <GridItem
        area={"main"}
        marginTop={"0"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Movies />
      </GridItem>
    </Grid>
  );
};

export default Home;
