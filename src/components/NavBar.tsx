import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import ColorModeButton from "./ColorModeButton";
import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import SideBar from "./SideBar";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { MovieQuery } from "../App";

interface Props {
  onSearch: (searchTerm: string) => void;
  onRatingChange: (rating: number) => void;
  onOrderChange: (order: string) => void;
  onSelectGenre: (genre: string) => void;
  onLogoClick: () => void;
  movieQuery: MovieQuery;
}

const NavBar = ({
  onSearch,
  onOrderChange,
  onRatingChange,
  onSelectGenre,
  onLogoClick,
  movieQuery,
}: Props) => {
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
          <Link to={"/"} onClick={onLogoClick}>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
              <Image
                src={logo}
                boxSize={{
                  sm: "20px",
                  md: "30px",
                }}
                marginRight={2}
              />
              <Text
                fontSize={{
                  sm: "lg",
                  md: "2xl",
                  lg: "3xl",
                }}
              >
                Cinéma
              </Text>
            </Box>
          </Link>
          <HStack gap={"20px"}>
            <SearchBar onSearch={onSearch} />
            <AiOutlineSetting
              fontSize={"30px"}
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
            <SideBar
              onOrderChange={onOrderChange}
              onRatingChange={onRatingChange}
              onSelectGenre={onSelectGenre}
              movieQuery={movieQuery}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default NavBar;
