import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Flex justifyContent={'space-around'}>
      <Box bg={"gray.800"} p={5} color={"white"} mt={20} borderTopRadius={40}>
        <Flex alignItems={"center"} gap={20}>
          <Image
            src="/logo/1.png"
            width={"25%"}
            className="log"
            as={motion.img}
            drag
            whileDrag={{ scale: 1.1 }}
          />
          <Box>
            <Text fontSize={15} fontWeight={900}>
              Customer Service
            </Text>

            <Box pt={4} fontSize={10}>
              <Text>Testimonials</Text>
              <Text>Contact</Text>
              <Text>Location & Working Hours</Text>
              <Text>Our Guarantee</Text>
              <Text>Track Your Order</Text>
              <Text>Help Page</Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize={15} fontWeight={900}>
              Quick Links
            </Text>

            <Box pt={4} fontSize={10}>
              <Text>Your Account</Text>
              <Text>Returns & Exchanges</Text>
              <Text>Return Center</Text>
              <Text>Purchase History</Text>
              <Text>Lastet News Blog</Text>
              <Text>Free Delivery </Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize={15} fontWeight={900}>
              Accounts
            </Text>

            <Box pt={4} fontSize={10}>
              <Text>My Account</Text>
              <Text>My Cart</Text>
              <Text>My Checkout</Text>
              <Text>News Letter</Text>
              <Text>Privacy Policy</Text>
              <Text>Frequently Asked Questions (FAQS)</Text>
            </Box>
          </Box>
        </Flex>
        <Box px={20}>
          <Flex justifyContent={"space-between"} fontSize={12}>
            <Text>All Rights Reserved Made by David Codes</Text>
            <Text>Terms & Conditions Privacy Policy</Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Footer;
