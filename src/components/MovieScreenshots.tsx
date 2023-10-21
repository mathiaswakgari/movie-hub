import { HStack, Image } from "@chakra-ui/react";

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
      <Image src={screenshot1} />
      <Image src={screenshot2} />
    </HStack>
  );
};

export default MovieScreenshots;
