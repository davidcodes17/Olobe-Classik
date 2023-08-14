import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ArrowDown, ArrowDown2, SearchNormal } from "iconsax-react";
import React from "react";

const SearchBar = () => {
  return (
    <Box>
      <Flex border={'1.4px solid #ddd'} borderRadius={10}>
        <Menu>
          <MenuButton bg={'none'} py={'0px'} fontSize={10} _hover={'none'} as={Button} rightIcon={<ArrowDown2 size={10} />}>
            Categories
          </MenuButton>
          <MenuList fontSize={8}>
            <MenuItem>Hausa</MenuItem>
            <MenuItem>Igbo</MenuItem>
            <MenuItem>Yoruba</MenuItem>
            <MenuItem>Calabar</MenuItem>
            <MenuItem>Intercontinantal Dishes</MenuItem>
          </MenuList>
        </Menu>

        <Input width={300} border={'none'} />
        <Button color={'white'} bg={'linear-gradient(45deg,darkorange,tomato)'} _hover={'none'} leftIcon={<SearchNormal size={10} />} fontSize={10}>Search</Button>
      </Flex>
    </Box>
  );
};

export default SearchBar;
