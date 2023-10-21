import { Spinner, VStack } from "@chakra-ui/react";

interface Props {
  color?: "black" | "white";
}

const FallbackLoader = ({ color }: Props) => {
  return (
    <VStack h={"100%"} justify={"center"} alignContent={"center"}>
      <Spinner color={color} />
    </VStack>
  );
};

export default FallbackLoader;
