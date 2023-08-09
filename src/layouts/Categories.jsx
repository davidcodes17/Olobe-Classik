import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import SoupCategories from '../components/SoupCategories'
import { ArrowCircleRight2, ArrowRight, ArrowRight2 } from 'iconsax-react'

const Categories = () => {
  return (
    <Box pt={20}>
        <Flex justifyContent={'space-around'}>
              <Box>
                  <Heading>Browse All Categories</Heading>
                  <Text>We have all Nigerian Soups for different tribes and culture</Text>
                  <Flex gap={10} alignItems={'center'} py={10}>
                    <SoupCategories name='Yoruba' img='logo/vegetable.png' />
                    <SoupCategories name='Igbo' img='logo/egusi.png' />
                    <SoupCategories name='Hausa' img='logo/oha.png' />
                    <SoupCategories name='Calabar' img='logo/okra.png' />
                    <IconButton icon={<ArrowCircleRight2 variant='Bold' size={40} />} bg={'none'} _hover={'none'} />
                  </Flex>
              </Box>
        </Flex>
    </Box>
  )
}

export default Categories