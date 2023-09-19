import { Flex } from "@chakra-ui/react";
import { Star1 } from "iconsax-react";
import React from "react";

const Stars = () => {
  return (
    <Flex justifyContent={"center"}>
      <Star1 variant="Bold" color="darkorange" size={20} />
      <Star1 variant="Bold" color="darkorange" size={20} />
      <Star1 variant="Bold" color="darkorange" size={20} />
      <Star1 variant="Bulk" color="darkorange" size={20} />
      <Star1 variant="Outline" color="darkorange" size={20} />
    </Flex>
  );
};

export default Stars;
