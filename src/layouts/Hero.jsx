import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { delay, motion } from "framer-motion";
import React from "react";
import MailingList from "../components/MailingList";

const Hero = () => {
  return (
    <Box mt={5} py={25} bg={'darkorange'}>
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <Box pt={20}>
          <Heading fontFamily={'Anton !important'} fontSize={50} color={'#000'}>
            Indulge Your Tastebuds <br /> Discover a Culinary <br />
            Wonderland at <br /> Olobe Classik
          </Heading>
          <Text py={2}>
            Welcome to a Gastronomic Paradise <br /> where Flavor Meets
            Convenience!
          </Text>
          <MailingList />
          <Text>Experience a Seamless Journey: From Click to Savor!</Text>
          <Flex gap={5} py={4}>
            <Button bg={"#fff"} color={"#000"} _hover={"none"}>
              Sign Up
            </Button>
            <Button color={'white'} bg={"#000"} _hover={"none"}>
              Sign In
            </Button>
          </Flex>
        </Box>
        <Image
          src="/logo/okra.png"
          width={500}
          as={motion.img}
          whileInView={{rotate :[0,360,0], delay : 2}}
          mt={20}
          borderRadius={400}
        />
      </Flex>
    </Box>
  );
};

export default Hero;
