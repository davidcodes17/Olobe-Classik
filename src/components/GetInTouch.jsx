import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { CallIncoming } from "iconsax-react";
import React from "react";

const GetInTouch = () => {
  return (
    <Flex alignItems={"center"} gap={2}>
      <CallIncoming size={20} variant="Bold" color="black" />
      <Box fontSize={10}>
        <Text>Get In Touch</Text>
        <a href="Tel:+2348094601448">+2348094601448</a>
      </Box>
    </Flex>
  );
};

export default GetInTouch;
