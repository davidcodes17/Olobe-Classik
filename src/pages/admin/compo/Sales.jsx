import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { ArrowDown, ArrowDown3, TaskSquare } from "iconsax-react";
import SerchBar from "../compo/SerchBar";
import React from "react";

const Sales = () => {
  return (
    <Box
      py={5}
      px={5}
      my={5}
      borderRadius={20}
      bg={"blackAlpha.900"}
      boxShadow={"0px 0px 10px #161616"}
      height={200}
    >
      <Flex alignItems={"center"}>
        <Text fontSize={20}>Sales</Text>
          <Button
            leftIcon={<ArrowDown />}
            bg={"#FAD85D"}
            color={"#000"}
            _hover={"none"}
            width={"fit-content"}
          >
            Download
          </Button>
      </Flex>
    </Box>
  );
};

export default Sales;
