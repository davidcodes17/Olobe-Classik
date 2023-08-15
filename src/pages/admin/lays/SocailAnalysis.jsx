import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SocialProduct from "../compo/SocialProduct";
import Ranking from "../compo/Ranking";
import { Link } from "react-router-dom";

const SocailAnalysis = () => {
  return (
    <Box
      bg={"whiteAlpha.100"}
      width={400}
      px={10}
      py={10}
      borderRadius={40}
      height={420}
    >
      <SocialProduct />
      <Ranking amount="$40k" soup="Ogbono Soup" me="200" />
      <Ranking amount="$200" soup="Egusi Soup" me="70" />
      <Ranking amount="$40" soup="Bitter Leaf Soup" me="30" />
      <Box py={3}>
        <Link>See More</Link>
      </Box>
    </Box>
  );
};

export default SocailAnalysis;
