import { Box, Flex, Text } from '@chakra-ui/react'
import { User } from 'iconsax-react'
import React from 'react'

const Admin = () => {
  return (
    <Box>
        <Flex alignItems={'center'} gap={5}>
            <Box fontSize={10}>
                <Text fontWeight={800}>Moronke Areegbe</Text>
                <Text color={'#ddd'}>moronkeare@gmail.com</Text>
            </Box>
            <User variant='Bold' />
        </Flex>
    </Box>
  )
}

export default Admin