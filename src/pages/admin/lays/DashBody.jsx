import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import MainDash from "./MainDash";
import Update from "../compo/Update";
import SocailAnalysis from "./SocailAnalysis";
import Sales from "../compo/Sales";
const DashBody = () => {
  return (
    <Box pl={5}>
      <MainDash />
      <Text pt={10}>Hello Moronke</Text>
      <Flex gap={20} alignItems={"center"}>
        <Box>
          <Grid gridTemplateColumns={"0.5fr 0.5fr 1fr"} mt={5}>
            <Update color="#48F7D6" header="Weekly Balance" money="$20k" />
            <Update color="#FAD85D" header="Orders In Line" money="750" />
            <Update color="#F2A0FF" header="New Clients" money="150" />
          </Grid>
          <Grid>
            <Sales />
          </Grid>
        </Box>
      </Flex>
      xshvc
    </Box>
  );
};

export default DashBody;
