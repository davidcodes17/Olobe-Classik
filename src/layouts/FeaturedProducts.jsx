import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Ratings from "../components/Ratings";
import { Facebook, Heart, Instagram, Like1, Whatsapp } from "iconsax-react";
import CardComponent from "../components/CardComponent";

const FeaturedProducts = () => {
  return (
    <Box p={"40px"}>
      <Flex justifyContent={'center'}>
        <Box>
          <Heading textAlign={'center'} fontSize={50} py={10}>Featured Products</Heading>
          <Box>
            <Flex gap={10} py={5}>
              <Box className="left" bg={'white'} p={5} boxShadow={'0px 0px 10px #ddd'} width={300} borderRadius={40} height={350}>
                    <CardComponent />
              </Box>
              <Box className="rightSide">
                <Heading>Get <span className="color">20% Discount</span> on <br /> Your First Sale!</Heading>
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Text>
                <Flex gap={10} py={4}>
                  <Ratings icon={<Facebook size={50} variant="Bold" color="#0091f1" />} />
                  <Ratings icon={<Instagram size={50} variant="Outline" color="tomato" />} />
                  <Ratings icon={<Whatsapp size={50} variant="Bold" color="green" />} />
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default FeaturedProducts;
