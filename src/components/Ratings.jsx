import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Like, Like1 } from "iconsax-react";
import React from "react";

const Ratings = (props) => {
  return (
    <Box
      textAlign={"center"}
      cursor={'pointer'}
      padding={10}
      as={motion.div}
      whileHover={{y : 20}}
      boxShadow={'0px 0px 10px #ddd'}
      bg={"white"}
      width={"fit-content"}
      borderRadius={20}
    >
      <Flex pb={5} justifyContent={"center"}>
        {props.icon}
      </Flex>
      <Text fontSize={30} fontWeight={900}>
        456k+
      </Text>
      <Text>Followers</Text>
    </Box>
  );
};

export default Ratings;
