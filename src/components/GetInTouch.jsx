import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { CallIncoming } from "iconsax-react";
import React from "react";

const GetInTouch = () => {
  return (
    <Flex alignItems={'center'} gap={5}>
      <IconButton
        icon={<CallIncoming variant="Bold" color="white" />}
        bg={"#000"}
        _hover={"none"}
        borderRadius={40}
      ></IconButton>
      <Box>
        <Text>Get In Touch</Text>
        <a href="Tel:+2348094601448">+2348094601448</a>
      </Box>
    </Flex>
  );
};

export default GetInTouch;
