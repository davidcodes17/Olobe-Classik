import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'
import GetInTouch from '../components/GetInTouch'

const Header = () => {
  return (
    <Box mt={10} px={20}>
        <Flex align={'center'} justifyContent={'space-around'}>
            <Logo />
            <SearchBar />
            <GetInTouch />
        </Flex>
    </Box>
  )
}

export default Header