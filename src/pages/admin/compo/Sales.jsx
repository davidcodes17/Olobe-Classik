import { Box, Button, Flex, HStack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { ArrowDown, ArrowDown3, TaskSquare } from "iconsax-react";
import SerchBar from "../compo/SerchBar";
import React from "react";

const Sales = () => {
  return (
    <Box
      py={5}
      px={5}
      my={5}
      borderRadius={20}
      bg={"blackAlpha.900"}
      boxShadow={"0px 0px 10px #161616"}
    >
      <Flex alignItems={"center"} justifyContent={'space-between'}>
        <Text fontSize={15}>Customer Details</Text>
          <Button
            leftIcon={<ArrowDown size={15} />}
            bg={"#FAD85D"}
            color={"#000"}
            _hover={"none"}
            fontSize={10}
            height={8}
          >
            Download
          </Button>
      </Flex>
      <Box>

      <TableContainer border={'1px solid black'}marginTop={5} borderRadius={10}>
        <Table borderRadius={20}>
          <Thead>
            <Tr bg={'whiteAlpha.200'}>
              <Th color={'white'} fontSize={10}>ID</Th>
                <Th color={'white'} fontSize={10}>Product Name</Th>
              <Th color={'white'} fontSize={10}>Quantity</Th>
              <Th color={'white'} fontSize={10}>Price</Th>
              <Th color={'white'} fontSize={10}>Order Type</Th>
            </Tr>
          </Thead>
          <Tbody>
                    <Tr>
                        <Td fontSize={10}>23223</Td>
                        <Td fontSize={10}>Ogbono Soup</Td>
                        <Td fontSize={10}>2 Liters</Td>
                        <Td fontSize={10}>$12000</Td>
                        <Td fontSize={10}>Delivery</Td>
                    </Tr>
          </Tbody>
          <Tbody>
                    <Tr>
                        <Td fontSize={10}>32445</Td>
                        <Td fontSize={10}>Egusi Soup</Td>
                        <Td fontSize={10}>4 Liters</Td>
                        <Td fontSize={10}>$26000</Td>
                        <Td fontSize={10}>Pick Up</Td>
                    </Tr>
          </Tbody>
          <Tbody>
                    <Tr>
                        <Td fontSize={10}>32445</Td>
                        <Td fontSize={10}>Egusi Soup</Td>
                        <Td fontSize={10}>4 Liters</Td>
                        <Td fontSize={10}>$26000</Td>
                        <Td fontSize={10}>Pick Up</Td>
                    </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      </Box>
    </Box>
  );
};

export default Sales;
