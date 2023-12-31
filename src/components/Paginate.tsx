import { Button, HStack } from "@chakra-ui/react";
import "./pagination.css";
import useMovieQueryStore from "../store";

const Paginate = () => {
  const setPage = useMovieQueryStore((s) => s.setPage);
  const page = useMovieQueryStore((s) => s.movieQuery.page);
  return (
    <HStack gap={2} marginBottom={3}>
      <Button
        isDisabled={page <= 1}
        onClick={() => setPage(page! - 1)}
        w={"100px"}
        fontFamily={"Poppins"}
        colorScheme="blackAlpha"
        borderRadius={10}
      >
        Previous
      </Button>
      <Button
        onClick={() => {
          setPage(page + 1);
          console.log(page);
        }}
        isDisabled={page >= 10}
        w={"100px"}
        fontFamily={"Poppins"}
        colorScheme="blackAlpha"
        borderRadius={10}
      >
        Next
      </Button>
    </HStack>
  );
};

export default Paginate;
