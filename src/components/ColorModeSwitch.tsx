import { Button, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} colorScheme="teal" size="sm">
      {colorMode === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
};

export default ColorModeSwitch;
