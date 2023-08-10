import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import ColorModeButton from "./ColorModeButton";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={"2px 10px"}>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Image src={logo} boxSize={"70px"} />
        <Text fontSize={"3xl"}>Cinéma</Text>
      </Box>
      <SearchBar onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
