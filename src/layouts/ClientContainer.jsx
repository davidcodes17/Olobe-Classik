import { Box, Flex, Text } from "@chakra-ui/react";
import {
  DollarCircle,
  DollarSquare,
  People,
  PercentageCircle,
  Wallet,
  Wallet1,
} from "iconsax-react";
import React from "react";

const ClientContainer = (props) => {
  return (
    <Box bg={'white'} p={5} borderRadius={10} boxShadow={'0px 0px 10px #ddd'}>
      <Flex alignItems={'center'} gap={5}>
        {props.icon}
        <Box>
            <Text fontWeight={900}>Trusted Partner</Text>
            <Text fontSize={10}>Lorem, ipsum dolor sit amet consectetur adipisicing elit <br /> consectetur adipisicing elit consectetur adipisicing elit</Text>
        </Box>
      </Flex>

      {/* <DollarCircle />
        <PercentageCircle />
        <Wallet1 /> */}
    </Box>
  );
};

export default ClientContainer;
