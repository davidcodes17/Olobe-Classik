import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import QuantityAdder from './QuantityAdder'

const Quantity = () => {
  return (
    <Box>
        <Text>Quantity : </Text>
        <QuantityAdder />
    </Box>
  )
}

export default Quantity