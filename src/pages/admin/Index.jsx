import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavSection from "./lays/NavSection";
import DashBody from "./lays/DashBody";

const Index = () => {
  return (
    <Box className="admin">
      <Box>
        <Flex gap={20}>
          <NavSection />
          <DashBody />
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
