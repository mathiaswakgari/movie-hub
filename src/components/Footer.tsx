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
    >
      <VStack justifyContent={"space-evenly"}>
        <Text>Mathias Wakgari</Text>
        <Text>© 2023 Mathias Wakgari™. All Rights Reserved.</Text>
      </VStack>
    </Box>
  );
};

export default Footer;
