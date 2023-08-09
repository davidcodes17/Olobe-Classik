import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../layouts/Header'
import SecondHeader from '../layouts/SecondHeader'
import Hero from '../layouts/Hero'
import Categories from '../layouts/Categories'
import FeaturedProducts from '../layouts/FeaturedProducts'
import TrainingSection from '../layouts/TrainingSection'
import CustomerFeedback from '../layouts/CustomerFeedback'
import Footer from '../layouts/Footer'

const LandingPage = () => {
  return (
    <Box>
        <Header />
        <SecondHeader />
        <Hero />
        <Categories />
        <FeaturedProducts />
        <TrainingSection />
        <CustomerFeedback />
        <Footer />
    </Box>
  )
}

export default LandingPage