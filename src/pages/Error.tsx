import { Heading, Text, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <VStack h="100vh" justifyContent={"center"}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error occurred"}
        </Text>
      </VStack>
    </>
  );
};

export default Error;
