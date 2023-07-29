import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../layouts/Header'
import SecondHeader from '../layouts/SecondHeader'
import Hero from '../layouts/Hero'
import Categories from '../layouts/Categories'

const LandingPage = () => {
  return (
    <Box>
        <Header />
        <SecondHeader />
        <Hero />
        <Categories />
    </Box>
  )
}

export default LandingPage