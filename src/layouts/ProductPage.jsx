import React from 'react'
import Header from './Header'
import SecondHeader from './SecondHeader'
import { Box, Image } from '@chakra-ui/react'
import ProductHeader from '../components/ProductHeader'
import ProductBody from '../components/ProductBody'
import { useParams } from 'react-router-dom'
const ProductPage = () => {
  const {id} = useParams()
  return (
    <Box>
        <Header />
        <SecondHeader />
        <ProductHeader />
        <ProductBody id={id} />
    </Box>
  )
}

export default ProductPage