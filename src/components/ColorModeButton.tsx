import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
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
        whiteSpace={"nowrap"}
      >
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeButton;
