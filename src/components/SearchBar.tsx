import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import useMovieQueryStore from "../store";

const SearchBar = () => {
  const setSearchTerm = useMovieQueryStore((s) => s.setSearchTerm);
  const ref = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  return (
    <Box
      width={{
        base: "100px",
        sm: "170px",
        md: "300px",
        lg: "450px",
      }}
    >
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) setSearchTerm(ref.current.value);
          navigate("/");
          formRef.current?.reset();
        }}
      >
        <InputGroup>
          <InputLeftElement children={<AiOutlineSearch />} />
          <Input
            ref={ref}
            type="text"
            placeholder="Search here..."
            fontSize={{
              base: "10px",
              md: "20px",
            }}
            onChange={() => setSearchTerm(ref.current?.value!)}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchBar;
