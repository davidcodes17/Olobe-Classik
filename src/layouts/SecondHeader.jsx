import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  ArrowDown2,
  HambergerMenu,
  ShoppingBag,
  ShoppingCart,
} from "iconsax-react";
import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";

const SecondHeader = () => {
  return (
    <Box>
      <Flex justifyContent={"space-between"} px={20} alignItems={"center"}>
        <Menu>
          <MenuButton
            bg={"darkorange"}
            py={"25px"}
            _hover={"none"}
            as={Button}
            color={"white"}
            leftIcon={<HambergerMenu />}
            rightIcon={<ArrowDown2 />}
          >
            Categories
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Box>
          <Flex alignItems={"center"} gap={10} justifyContent={"center"}>
            <Link>Home</Link>
            <Link>Best Sales</Link>
            <Link>Services</Link>
            <Link>Promotions</Link>

            <Cart />
            <Button bg={"darkorange"} color={"white"}>
              Sign Up
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SecondHeader;
