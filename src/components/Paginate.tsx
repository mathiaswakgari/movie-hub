import { Box } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import "./pagination.css";
import useMovieQueryStore from "../store";

const Paginate = () => {
  const setPage = useMovieQueryStore((s) => s.setPage);
  return (
    <Box>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"---"}
        activeClassName="active"
        pageCount={7}
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        containerClassName="pagination"
        marginPagesDisplayed={2}
        pageRangeDisplayed={10}
        onPageChange={(data) => setPage(data.selected)}
      />
    </Box>
  );
};

export default Paginate;
