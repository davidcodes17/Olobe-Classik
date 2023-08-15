import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
const SocialProduct = () => {
  return (
    <Flex
    gap={2}
    >
      <Box width={14} borderRadius={10} height={10} bg={"#fff"}></Box>
      <Box>
        <Text>Ranking Sales</Text>
        <Text fontSize={10}>Date : 14th of August 2023</Text>
      </Box>
    </Flex>
  );
};

export default SocialProduct;
