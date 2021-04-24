import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";

export const ChakraMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={null}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={null}>New Tab</MenuItem>
        <MenuItem icon={null}>New Window</MenuItem>
        <MenuItem icon={null}>Open Closed Tab</MenuItem>
        <MenuItem icon={null}>Open File...</MenuItem>
      </MenuList>
    </Menu>
  );
};
