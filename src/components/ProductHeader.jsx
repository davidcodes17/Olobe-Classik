import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const ProductHeader = () => {
  return (
    <Box px={'150px'} pt={5} justifyContent={'space-around'}>
        <Text fontSize={10}>Nigerian Soups/ Yoruba/ <b>Egusi Soup</b></Text>
    </Box>
  )
}

export default ProductHeader