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
          <Image src="logo/vegetable.png" width={"55%"} />
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
            <Text py={2} fontSize={18}>
              Nigerian Vegetable Soup
            </Text>
            <Flex gap={4} justifyContent={"center"}>
              <Text fontSize={20} textDecoration={'line-through'} fontWeight={'bold'}>$2400</Text>
              <Text fontSize={20}>$1400</Text>
            </Flex>
            <Flex justifyContent={'center'}>
              <Button
                _hover={"none"}
                mt={2}
                bg={"darkorange"}
                borderRadius={40}
                color={"white"}
                rightIcon={<ArrowCircleRight2 variant="Bold" />}
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
