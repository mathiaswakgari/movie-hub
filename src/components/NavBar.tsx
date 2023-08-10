import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={100} />
    </HStack>
  );
};

export default NavBar;
