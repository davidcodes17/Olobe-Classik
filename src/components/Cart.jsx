import { Box, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'

const Cart = () => {
  return (
    <Box pos={"relative"} cursor={"pointer"}>
              <IconButton
                bg={"none"}
                _hover={"none"}
                icon={<TiShoppingCart size={40} />}
              ></IconButton>
              <Text
                py={2}
                px={3.5}
                top={-3}
                right={-3}
                fontWeight={900}
                fontSize={10}
                pos={"absolute"}
                borderRadius={40}
                bg={"darkorange"}
              >
                1
              </Text>
            </Box>
  )
}

export default Cart