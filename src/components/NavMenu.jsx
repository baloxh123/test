import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { Menu as MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import * as React from "react";

function NavMenu() {
  return (
    <Box display={["block", "block", "none"]}>
    <Menu >
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<MenuIcon />}
        variant="ghost"
      />
      <MenuList>
        <MenuItem as="a" href="/#about">
          About Us
        </MenuItem>
        <MenuItem as="a" href="/#services">
          Services
        </MenuItem>
        <MenuItem as="a" href="/#contact">
          Contact Us
        </MenuItem>
      </MenuList>
    </Menu>
    </Box>
  );
}

export default NavMenu;
