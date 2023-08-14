import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { delay, motion } from "framer-motion";
import React from "react";
import MailingList from "../components/MailingList";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box my={0} bg={"none"}>
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <Box pt={20}>
          <Text px={3} fontSize={10} py={2} borderRadius={20} color={'white'} width={'fit-content'} bg={'linear-gradient(45deg,darkorange,tomato)'}>Experience a Seamless Journey: From Click to Savor!</Text>
          <Heading  fontSize={30} pt={3} color={"#000"}>
            Indulge Your Tastebuds <br /> Discover a Culinary <br />
            Wonderland at <br /> Olobe Classik
          </Heading>
          <Text py={2} fontSize={10}>
            Welcome to a Gastronomic Paradise <br /> where Flavor Meets
            Convenience!
          </Text>
          <MailingList />
          <Flex gap={5} py={4}>
            <Button as={Link} boxShadow={'0px 0px 10px #ddc'} borderRadius={40} width={100} fontSize={10} to={'/signup'} bg={"#fff"} color={"#000"} _hover={"none"}>
              Sign Up
            </Button>
            <Button as={Link} to={'/signin'} fontSize={10} width={100} borderRadius={40} color={"white"} bg={"#000"} _hover={"none"}>
              Sign In
            </Button>
          </Flex>
        </Box>
        <Image
          src="/logo/okra.png"
          width={300}
          as={motion.img}
          mt={0}
          borderRadius={400}
        />
      </Flex>
    </Box>
  );
};

export default Hero;
