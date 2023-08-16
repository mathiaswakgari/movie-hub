import { Box, VStack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      w={"100%"}
      h={"100px"}
      borderTop={"1px solid grey"}
      bg={"chakra-body-bg"}
      justifyContent={"center"}
      flexDirection={"column"}
      display={"flex"}
      paddingTop={"20px"}
    >
      <VStack justifyContent={"space-evenly"}>
        <Text>Mathias Wakgari</Text>
        <Text
          fontSize={{
            base: "10px",
            md: "25px",
          }}
        >
          © 2023 Mathias Wakgari™. All Rights Reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
