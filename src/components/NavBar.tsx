import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import ColorModeButton from "./ColorModeButton";
import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import SideBar from "./SideBar";
import "./navBar.css";
import { Link } from "react-router-dom";
import useMovieQueryStore from "../store";

const NavBar = () => {
  const reset = useMovieQueryStore((s) => s.reset);
  const [isDropDownClicked, setIsDropDownClicked] = useState(false);
  return (
    <>
      <Box
        position={"fixed"}
        width={"100%"}
        zIndex={3}
        paddingBottom={0}
        className="smooth"
        bg={"chakra-body-bg"}
        borderBottom={"1px solid"}
        borderColor={"gray.100"}
      >
        <HStack justifyContent={"space-between"} padding={"2px 10px"}>
          <Link to={"/"} onClick={reset}>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
              <Image
                src={logo}
                boxSize={{
                  base: "10px",
                  sm: "20px",
                  md: "30px",
                }}
                marginRight={2}
              />
              <Text
                fontSize={{
                  base: "2xs",
                  sm: "lg",
                  md: "2xl",
                  lg: "3xl",
                }}
                paddingTop={"15px"}
              >
                Cinéma
              </Text>
            </Box>
          </Link>
          <HStack gap={"20px"}>
            <SearchBar />
            <AiOutlineSetting
              fontSize={{
                base: "15px",
              }}
              cursor={"pointer"}
              className="icon"
              onClick={() => {
                setIsDropDownClicked(!isDropDownClicked);
              }}
            />
          </HStack>
          <ColorModeButton />
        </HStack>
        {isDropDownClicked && (
          <Box
            display={"flex"}
            width={"100%"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <SideBar />
          </Box>
        )}
      </Box>
    </>
  );
};

export default NavBar;
