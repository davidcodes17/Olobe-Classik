import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Update = (props) => {
  return (
    <Box p={5} bg={props.color} color={'black'} cursor={'pointer'} borderRadius={20} width={250}>
        <Text fontSize={12} fontWeight={600}>{props.header}</Text>
        <Flex>
            <Box pt={3}>
                <Text pb={1} fontSize={25}>{props.money}</Text>
                <Text fontSize={10} fontWeight={500} textDecoration={'underline'}>View entire list</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default Update