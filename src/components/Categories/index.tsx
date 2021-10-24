import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { ProductCard } from './ProductCard'
import { products } from './_data'
import { ProductGrid } from './ProductGrid'


export const ProfileCategories = (props:any) => (
  <Box
    maxW="8xl"
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <ProductGrid onClick={() => props.setActiveComponent('products')}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
)
