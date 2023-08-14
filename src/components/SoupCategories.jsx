import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const SoupCategories = (props) => {
  return (
    <Flex bg={'white'} boxShadow={'0px 0px 10px #ddd'} borderRadius={40} cursor={'pointer'} as={motion.div} whileHover={{scale : 1.1}}>
      <Box
        as={motion.div}
        whileHover={{ background : "linear-gradient(45deg,darkorange,tomato)", color : "white",transition : 2}}
        borderRadius={40}
        maxWidth={"200px"}
        py={8}
        textAlign={"center"}
        bg={'white'}
      >
        <Flex justifyContent={'center'}>
          <Image
            justifyContent={"center"}
            src={props.img}
            width={"50%"}
          />
        </Flex>
        <Text fontWeight={900} fontSize={15}>{props.name}</Text>
        <Text fontSize={10}>25 Items</Text>
      </Box>
    </Flex>
  );
};

export default SoupCategories;
