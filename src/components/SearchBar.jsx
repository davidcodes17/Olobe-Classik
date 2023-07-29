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
          <MenuButton bg={'none'} py={'25px'} _hover={'none'} as={Button} rightIcon={<ArrowDown2 />}>
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

        <Input height={'48px'} width={200} border={'none'} />
        <Button color={'white'} bg={'darkorange'} _hover={'none'} py={'25px'} leftIcon={<SearchNormal />}>Search</Button>
      </Flex>
    </Box>
  );
};

export default SearchBar;
