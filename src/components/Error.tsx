import { Box, Text, HStack } from "@chakra-ui/react";

const Error = () => {
  return (
    <Box w={"100%"} h={"100vh"}>
      <HStack
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        h={"100%"}
      >
        <Text>Some error Occurred</Text>
      </HStack>
    </Box>
  );
};

export default Error;
