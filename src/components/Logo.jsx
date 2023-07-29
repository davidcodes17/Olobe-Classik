import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Flex alignItems={'center'}>
        <Image src='/logo/1.png' width={'100px'} />
        <Text fontSize={25}>Olobe Classik</Text>
    </Flex>
  )
}

export default Logo