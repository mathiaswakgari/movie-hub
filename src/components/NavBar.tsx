import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={100} />
      <SearchBar />
    </HStack>
  );
};

export default NavBar;
