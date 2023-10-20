import { Box, HStack } from "@chakra-ui/react";
import GenreSelector from "./GenreSelector";
import RatingSelector from "./RatingSelector";
import OrderSelector from "./OrderSelector";
import "./navBar.css";

const SideBar = () => {
  return (
    <Box paddingBottom={1} className="smooth">
      <HStack
        gap={{
          base: "5px",
          md: "20px",
        }}
        paddingY={2}
        justifyContent={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
        }}
      >
        <GenreSelector />
        <RatingSelector />
        <OrderSelector />
      </HStack>
    </Box>
  );
};

export default SideBar;
