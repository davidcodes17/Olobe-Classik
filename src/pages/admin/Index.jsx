import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavSection from "./lays/NavSection";
import DashBody from "./lays/DashBody";

const Index = () => {
  return (
    <Box className="admin">
      <Box py={0}>
        <Flex>
          <NavSection />
          <DashBody />
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
