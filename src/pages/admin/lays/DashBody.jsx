import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import MainDash from "./MainDash";
import Update from "../compo/Update";
import SocailAnalysis from "./SocailAnalysis";
const DashBody = () => {
  return (
    <Box pl={5}>
      <MainDash />
      <Text pt={10}>Hello Moronke</Text>
      <Flex gap={20} alignItems={'center'}>
        <Flex pt={4} gap={'40px'} alignItems={'center'}>
          <Update color="#48F7D6" header="Weekly Balance" money="$20k" />
          <Update color="#FAD85D" header="Orders In Line" money="750" />
          <Update color="#F2A0FF" header="New Clients" money="150" />
        </Flex>
        <SocailAnalysis />
      </Flex>
    </Box>
  );
};

export default DashBody;
