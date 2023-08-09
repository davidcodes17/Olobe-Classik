import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import ClientBox from "../components/ClientBox";
import { ArrowCircleLeft, ArrowCircleLeft2, ArrowCircleRight2, ArrowLeft2 } from "iconsax-react";

const CustomerFeedback = () => {
  return (
    <Box>
      <Flex justifyContent={"space-around"}>
        <Box textAlign={"center"}>
          <Heading>Our Customer Feedback</Heading>
          <Text fontSize={10}>
            Interactive product distinctive paradigms where as one-to-one
            intellectual capital <br />
            resource sucking services. Objectively customize vertical
          </Text>
          <Flex alignItems={'center'} py={5} gap={5}>
            <ClientBox />
            <ClientBox />
            <ClientBox />
          </Flex>

          <Flex justifyContent={'center'} gap={20}>
            <IconButton bg={'none'} _hover={'none'} icon={<ArrowCircleLeft2 variant="Bold" />} />
            <IconButton bg={'none'} _hover={'none'} icon={<ArrowCircleRight2 variant="Bold" />} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CustomerFeedback;
