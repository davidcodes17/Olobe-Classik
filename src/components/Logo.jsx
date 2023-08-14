import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Flex alignItems={'center'}>
        <Image src='/logo/1.png' width={'60px'} />
        <Text fontSize={15}>Olobe Classik</Text>
    </Flex>
  )
}

export default Logo