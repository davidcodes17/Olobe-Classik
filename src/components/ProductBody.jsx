import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Quantity from '../components/Quantity'
import Stars from "./Stars";

const ProductBody = ({id}) => {
  const [isLoading, setLoading] = useState(true)
  fetch("/api/show/product/"+id)
  return (
    <Flex px={"150px"} py={10}>
      <Box>
        <Image src="/logo/vegetable.png" width={300} />
      </Box>
        <Box>
            <Text>Ogbono Soup {id}</Text>
            <Text>Ogbono Soup from the Yoruba's Side</Text>
            <Flex>
            <Stars />
            <Text textDecoration={'underline'}>2227 reviews</Text>
            </Flex>
            <Quantity />
        </Box>
    </Flex>
  );
};

export default ProductBody;
