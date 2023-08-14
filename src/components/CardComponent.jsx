import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleRight2,
  ArrowLeft,
  ArrowLeft2,
  Star,
  Star1,
} from "iconsax-react";
import React from "react";

const CardComponent = () => {
  return (
    <Box>
      <Box>
        <Flex justifyContent={"center"}>
          <Image src="logo/vegetable.png" width={"50%"} />
        </Flex>
        <Flex justifyContent={"center"}>
          <Box>
            <Flex justifyContent={"center"}>
              <Star1 variant="Bold" color="darkorange" size={20} />
              <Star1 variant="Bold" color="darkorange" size={20} />
              <Star1 variant="Bold" color="darkorange" size={20} />
              <Star1 variant="Bulk" color="darkorange" size={20} />
              <Star1 variant="Outline" color="darkorange" size={20} />
            </Flex>
            <Text py={2} fontSize={15}>
              Nigerian Vegetable Soup
            </Text>
            <Flex gap={4} justifyContent={"center"} fontSize={10}>
              <Text textDecoration={'line-through'} fontWeight={'bold'}>$2400</Text>
              <Text>$1400</Text>
            </Flex>
            <Flex justifyContent={'center'}>
              <Button
                _hover={"none"}
                mt={2}
                bg={"linear-gradient(45deg,darkorange,tomato);"}
                borderRadius={40}
                fontSize={10}
                color={"white"}
                rightIcon={<ArrowCircleRight2 size={15} variant="Bold" />}
              >
                Shop Now
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardComponent;
