import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import SerchBar from "../compo/SerchBar";
import Admin from "../compo/Admin";
import Logo from "../../../components/Logo";

const MainDash = () => {
  return (
    <Flex justifyContent={"space-between !important"} alignItems={'center'}>
      <Box>
        <Flex gap={10} alignItems={'center'} justifyContent={"left"}>
          {/* <Image src="/logo/2.png" width={20} borderRadius={40} /> */}
          <SerchBar />
        </Flex>
      </Box>
      <Box>
        <Text>Dashboard</Text>
      </Box>
      <Box>
        <Admin />
      </Box>
    </Flex>
  );
};

export default MainDash;
