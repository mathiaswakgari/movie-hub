import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import ColorModeButton from "./ColorModeButton";
import { useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
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

          <SearchBar onSearch={onSearch} />
          <ColorModeButton />
        </HStack>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          {!isDropDownClicked && (
            <BsArrowDownCircle
              style={{
                fontSize: "30px",
                marginBottom: "4px",
                cursor: "pointer",
                marginTop: "10px",
              }}
              className="btn"
              onClick={() => {
                setIsDropDownClicked(!isDropDownClicked);
              }}
            />
          )}
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
              <BsArrowUpCircle
                style={{
                  fontSize: "30px",
                  marginBottom: "14px",
                  cursor: "pointer",
                }}
                className="btn"
                onClick={() => {
                  setIsDropDownClicked(!isDropDownClicked);
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
