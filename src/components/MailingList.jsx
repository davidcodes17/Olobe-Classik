import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import {TbBrandTelegram} from 'react-icons/tb'
import React from 'react'

const MailingList = () => {
  return (
    <Box py={4}>
        <Flex border={'2px solid #ddd'} width={350} borderRadius={10}>
            <Input placeholder='Enter Email' fontSize={10} border={0} width={300} />
            <Button bg={'linear-gradient(45deg,darkorange,tomato);'} _hover={'none'}><TbBrandTelegram color='white' /></Button>
        </Flex>
        <Text pt={2} fontSize={10}>Join our Mailing List</Text>
    </Box>
  )
}

export default MailingList