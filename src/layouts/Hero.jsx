import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { delay, motion } from "framer-motion";
import React from "react";
import MailingList from "../components/MailingList";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box my={20} bg={"none"}>
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <Box pt={20}>
          <Text px={3} py={2} borderRadius={20} color={'white'} width={'fit-content'} bg={'darkorange'}>Experience a Seamless Journey: From Click to Savor!</Text>
          <Heading  fontSize={50} color={"#000"}>
            Indulge Your Tastebuds <br /> Discover a Culinary <br />
            Wonderland at <br /> Olobe Classik
          </Heading>
          <Text py={2}>
            Welcome to a Gastronomic Paradise <br /> where Flavor Meets
            Convenience!
          </Text>
          {/* <MailingList /> */}
          <Flex gap={5} py={4}>
            <Button as={Link} to={'/signup'} bg={"#fff"} color={"#000"} _hover={"none"}>
              Sign Up
            </Button>
            <Button color={"white"} bg={"#000"} _hover={"none"}>
              Sign In
            </Button>
          </Flex>
        </Box>
        <Image
          src="/logo/okra.png"
          width={450}
          as={motion.img}
          mt={0}
          borderRadius={400}
        />
      </Flex>
    </Box>
  );
};

export default Hero;
