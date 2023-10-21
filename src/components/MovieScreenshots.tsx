import { HStack, Image } from "@chakra-ui/react";
import FallbackLoader from "./FallbackLoader";

interface Props {
  screenshot1?: string;
  screenshot2?: string;
}

const MovieScreenshots = ({ screenshot1, screenshot2 }: Props) => {
  return (
    <HStack
      flexDirection={{
        base: "column",
        md: "row",
      }}
      overflowX={"scroll"}
      paddingX={4}
    >
      <Image src={screenshot1} fallback={<FallbackLoader />} />
      <Image src={screenshot2} fallback={<FallbackLoader />} />
    </HStack>
  );
};

export default MovieScreenshots;
