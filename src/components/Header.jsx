import { HStack, Switch, Text } from "@chakra-ui/react";

const Header = ({ toggleColorMode, colorMode }) => {
  return (
    <HStack justifyContent="space-between" p={4} borderBottomWidth="1px">
      <Text fontSize="2xl" fontWeight="bold">
        To-Do List
      </Text>
      <HStack>
        <Text>{colorMode === "light" ? "Light Mode" : "Dark Mode"}</Text>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      </HStack>
    </HStack>
  );
};

export default Header;