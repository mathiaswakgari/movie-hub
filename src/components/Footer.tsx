import { Box, VStack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      w={"100%"}
      h={"50px"}
      bg={"chakra-body-bg"}
      justifyContent={"center"}
      flexDirection={"column"}
      display={"flex"}
      paddingTop={"20px"}
    >
      <VStack justifyContent={"space-evenly"}>
        <Text
          fontFamily={"Poppins"}
          fontSize={{
            base: "10px",
            md: "16px",
          }}
        >
          © 2024 Mathias Wakgari™. All Rights Reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
