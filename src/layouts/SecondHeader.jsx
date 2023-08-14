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
import { Link } from "react-router-dom";
import Cart from "../components/Cart";

const SecondHeader = () => {
  return (
    <Box pl={5}>
      <Flex justifyContent={"space-between"} px={'130px'} alignItems={"center"}>
        <Menu>
          <MenuButton
            bg={"linear-gradient(45deg,darkorange,tomato)"}
            _hover={"none"}
            as={Button}
            fontSize={10}
            color={"white"}
            borderRadius={40}
            leftIcon={<HambergerMenu size={10} />}
            rightIcon={<ArrowDown2 size={10} />}
          >
            Categories
          </MenuButton>
          <MenuList fontSize={10}>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Box>
          <Flex alignItems={"center"} gap={10} justifyContent={"center"} fontSize={10}>
            <Link>Home</Link>
            <Link>Best Sales</Link>
            <Link>Services</Link>
            <Link>Promotions</Link>

            <Cart />
            <Button fontSize={10} height={'40px'} p={'10px 40px'} _hover={'none'} borderRadius={40} bg={"linear-gradient(45deg,darkorange,tomato)"} color={"white"}>
              Sign Up
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SecondHeader;
