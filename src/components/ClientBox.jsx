import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Star1 } from "iconsax-react";
import React from "react";

const ClientBox = () => {
  return (
    <Box
      bg={"white"}
      width={"fit-content"}
      p={5}
      borderRadius={30}
      boxShadow={"0px 0px 10px #ddd"}
    >
      <Flex gap={5}>
        <Box p={6} bg={"#000"} borderRadius={40}></Box>
        <Box>
          <Text fontWeight={500}>George Nakashima</Text>
          <Box>
            <Flex justifyContent={"left"}>
              <Star1 variant="Bold" color="darkorange" size={20} />
              <Star1 variant="Bold" color="darkorange" size={20} />
              <Star1 variant="Bold" color="darkorange" size={20} />
              <Star1 variant="Bulk" color="darkorange" size={20} />
              <Star1 variant="Outline" color="darkorange" size={20} />
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Box>
        <Text pt={3} fontSize={10} width={"300px"} fontWeight={300} textAlign={"left"}>
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quo
          voluptatum ducimus voluptate doloremque placeat pariatur accusamus
          sint explicabo facilis, nisi nobis eos at laboriosam enim nihil?
          Obcaecati, quis quibusdam."
        </Text>
      </Box>
    </Box>
  );
};

export default ClientBox;
