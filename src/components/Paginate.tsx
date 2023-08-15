import { Box } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

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
        activeClassName="active"
        pageCount={10}
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        containerClassName="pagination"
        marginPagesDisplayed={2}
        pageRangeDisplayed={10}
        onPageChange={(data) => onPageChange(data.selected)}
      />
    </Box>
  );
};

export default Paginate;
