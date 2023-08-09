import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const SoupCategories = (props) => {
  return (
    <Flex bg={'white'} boxShadow={'0px 0px 10px #ddd'} borderRadius={40} cursor={'pointer'} as={motion.div} whileHover={{scale : 1.1}}>
      <Box
        as={motion.div}
        whileHover={{ background : "darkorange", color : "white",transition : 2}}
        p={10}
        borderRadius={40}
        maxWidth={"240px"}
        textAlign={"center"}
        bg={'white'}
      >
        <Flex justifyContent={'center'}>
          <Image
            justifyContent={"center"}
            src={props.img}
            width={"100%"}
          />
        </Flex>
        <Text fontWeight={900} fontSize={25}>{props.name}</Text>
        <Text>25 Items</Text>
        {/* <Text>Hausa</Text>
        <Text>Igbo</Text>
        <Text>Extras</Text> */}
      </Box>
    </Flex>
  );
};

export default SoupCategories;
