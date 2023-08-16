import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      justifyContent={"center"}
      alignItems={"center"}
      alignContent={"center"}
    >
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text
        display={{
          base: "none",
          sm: "block",
        }}
        marginTop={"17px"}
      >
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeButton;
