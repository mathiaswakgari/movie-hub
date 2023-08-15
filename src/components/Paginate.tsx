import { Box } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";

interface Props {
  onPageChange: (pageNumber: number) => void;
}

const Paginate = ({ onPageChange }: Props) => {
  return (
    <Box>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"---"}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={(data) => onPageChange(data.selected)}
      />
    </Box>
  );
};

export default Paginate;
