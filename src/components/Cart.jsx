import { Box, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'

const Cart = () => {
  return (
    <Box pos={"relative"} cursor={"pointer"}>
              <IconButton
                bg={"none"}
                _hover={"none"}
                icon={<TiShoppingCart size={20} />}
              ></IconButton>
              <Text
              top={1}
              left={6}
                p={'1px 3px'}
                fontSize={6}
                pos={"absolute"}
                borderRadius={40}
                bg={"linear-gradient(45deg,darkorange,tomato);"}
              >
                0
              </Text>
            </Box>
  )
}

export default Cart