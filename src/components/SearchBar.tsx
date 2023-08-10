import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  onSearch: (searchTerm: string) => void;
}
const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<AiOutlineSearch />} />
        <Input ref={ref} type="text" placeholder="Search here..." />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
