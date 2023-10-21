import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  description_full: string;
}

const MovieDescription = ({ description_full }: Props) => {
  return (
    <Box
      maxW={{
        sm: "80%",
        md: "50%",
        lg: "60%",
      }}
      alignSelf={"flex-start"}
    >
      <Heading>Description</Heading>
      <Text
        fontSize={{
          base: "12px",
          sm: "19px",
        }}
        paddingY={5}
        fontWeight={"light"}
      >
        {description_full! ? description_full! : "No Description"}
      </Text>
    </Box>
  );
};

export default MovieDescription;
