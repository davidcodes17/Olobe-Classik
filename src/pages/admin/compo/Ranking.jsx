import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Ranking = (props) => {
  return (
    <Box pt={4}>
      <Text fontSize={10}>{props.soup}</Text>
      <Text textAlign={"left"} fontSize={20}>
        {props.amount}
      </Text>
      <Box
        my={2}
        width={300}
        height={2}
        bg={"whiteAlpha.200"}
        borderRadius={40}
      >
        <Box
          width={`${props.me}px`}
          height={2}
          bg={"linear-gradient(45deg, tomato, darkorchid)"}
          borderRadius={40}
        ></Box>
      </Box>
    </Box>
  );
};

export default Ranking;
