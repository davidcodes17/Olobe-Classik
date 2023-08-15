import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import MainDash from "./MainDash";
import Update from "../compo/Update";
import SocailAnalysis from "./SocailAnalysis";
import Sales from "../compo/Sales";
const DashBody = () => {
  return (
    <Box pl={'100px'}>
      <MainDash />
      <Text fontSize={20} pt={10}>Hello Moronke,</Text>
      <Flex gap={20} alignItems={"center"}>
        <Box>
          <Grid gridTemplateColumns={"0.5fr 0.5fr 1fr"} gridGap={5} mt={5}>
            <Update color="#FAD85D" header="Monthly Sales" money="$750k" />
            <Update color="#48F7D6" header="Weekly Balance" money="$20k" />
            <Update color="#F2A0FF" header="New Clients" money="150" />
          </Grid>
          <Grid>
            <Sales />
          </Grid>
        </Box>
        <SocailAnalysis />
      </Flex>
    </Box>
  );
};

export default DashBody;
