import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  description_full: string;
}

const MovieDescription = ({ description_full }: Props) => {
  return (
    <Box
      maxW={{
        base: "100%",

        md: "50%",
        lg: "400px",
        xl: "800px",
      }}
      alignSelf={"flex-start"}
    >
      <Heading>Description</Heading>
      <Box h={"400px"} overflowY={"auto"}>
        <Text
          fontSize={{
            base: "12px",
            sm: "19px",
          }}
          textOverflow={"ellipsis"}
          paddingY={5}
          fontWeight={"light"}
        >
          {description_full! ? description_full! : "No Description"}
        </Text>
      </Box>
    </Box>
  );
};

export default MovieDescription;
