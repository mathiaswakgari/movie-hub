import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  onSearch: (searchTerm: string) => void;
}
const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  return (
    <Box
      width={{
        sm: "170px",
        md: "300px",
        lg: "450px",
      }}
    >
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) onSearch(ref.current.value);
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
            onChange={() => onSearch(ref.current?.value!)}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchBar;
