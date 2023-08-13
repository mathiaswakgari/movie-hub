import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import ColorModeButton from "./ColorModeButton";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import SideBar from "./SideBar";
import "./NavBar.css";

interface Props {
  onSearch: (searchTerm: string) => void;
  onRatingChange: (rating: number) => void;
  onOrderChange: (order: string) => void;
  onSelectGenre: (genre: string) => void;
}

const NavBar = ({
  onSearch,
  onOrderChange,
  onRatingChange,
  onSelectGenre,
}: Props) => {
  const [isDropDownClicked, setIsDropDownClicked] = useState(false);
  return (
    <Box>
      <HStack justifyContent={"space-between"} padding={"2px 10px"}>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Image src={logo} boxSize={"70px"} />
          <Text fontSize={"3xl"}>Cinéma</Text>
        </Box>
        <SearchBar onSearch={onSearch} />
        <ColorModeButton />
      </HStack>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        {!isDropDownClicked && (
          <IoIosArrowDropdown
            style={{
              fontSize: "30px",
              marginBottom: "4px",
              cursor: "pointer",
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
            className="smooth"
          >
            <SideBar
              onOrderChange={onOrderChange}
              onRatingChange={onRatingChange}
              onSelectGenre={onSelectGenre}
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
  );
};

export default NavBar;
