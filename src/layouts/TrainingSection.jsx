import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import ClientContainer from "./ClientContainer";
import { DollarCircle, People, PercentageCircle, Wallet2 } from "iconsax-react";

const TrainingSection = () => {
  return (
    <Box my={100}>
      <Flex justifyContent={"center"}>
        {/* <Image src='logo/vegetable.png' width={"20%"} /> */}
        <Box>
          <Heading color={"#000"} fontSize={25} fontWeight={900}>
            We also do Co-Operate Training on <br /> How to Prepare Delicious
            Meals
          </Heading>
          <Text fontSize={10}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus fugiat.
          </Text>
          <Box>
            <Flex py={5} gap={10}>
              <ClientContainer
                icon={<People size={40} color="darkorange" variant="Bold" />}
              />
              <ClientContainer
                icon={<Wallet2 color="tomato" size={40} variant="Bold" />}
              />
            </Flex>
            <Flex gap={10}>
              <ClientContainer
                icon={
                  <PercentageCircle color="tomato" size={40} variant="Bold" />
                }
              />
              <ClientContainer
                icon={
                  <DollarCircle color="darkorange" size={40} variant="Bold" />
                }
              />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default TrainingSection;
