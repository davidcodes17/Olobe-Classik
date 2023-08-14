import { Box, Flex, Input } from "@chakra-ui/react";
import { SearchFavorite } from "iconsax-react";
import React from "react";

const SerchBar = () => {
  return (
    <Box>
      <Flex alignItems={"center"} bg={"#161616"} px={8} borderRadius={40}>
        <SearchFavorite size={20} />
        <Input
          border={0}
          borderRadius={40}
          height={'50px'}
          color={"#fff"}
          width={150}
          fontSize={12}
          placeholder="Serch here..."
        />
      </Flex>
    </Box>
  );
};

export default SerchBar;
