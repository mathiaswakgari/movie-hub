import { VStack, Spinner, Text } from "@chakra-ui/react";

const Loader = () => {
  return (
    <VStack
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      h={"100%"}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text>Loading...</Text>
    </VStack>
  );
};

export default Loader;
