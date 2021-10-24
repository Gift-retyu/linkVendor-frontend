import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { Rating } from './Rating'
import { FavouriteButton } from './FavouriteButton'
import { PriceTag } from './PriceTag'
import { Product } from './_data'

interface Props {
  product: Product
  rootProps?: StackProps
}

export const ProductCard = (props: Props) => {
  const { product, rootProps } = props
  const { name, imageUrl, price, salePrice, rating, category } = product
  return (
    <Stack cursor="pointer" spacing={useBreakpointValue({ base: '4', md: '5' })} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
          />
        </AspectRatio>

        <Box>
          <Heading
            position="absolute"
            width="100%"
            textAlign="center"
            mt={'-30px'}
            as="h2"
            size="l"
            bg="blackAlpha.700"
          >
            {category}
          </Heading>
        </Box>
      </Box>
    </Stack>
  )
}
