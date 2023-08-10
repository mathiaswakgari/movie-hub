import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import ColorModeButton from "./ColorModeButton";

const NavBar = () => {
  return (
    <HStack>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Image src={logo} boxSize={100} />
        <Text fontSize={"3xl"}>Cinéma</Text>
      </Box>
      <SearchBar />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
