import {
  Flex,
  Link,
  Square,
  Stack,
  Text,
  Grid,
  GridItem,
  Box,
  textDecoration,
  Image,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import GridComponent from './Grid'
import Paginator from './Pagination'
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}
export const Main = (props) => (
  <>
  <Flex color="white">
    <Square mt={10} size="150px">
      <Stack fontSize={14}>
        <ListHeader>Categories</ListHeader>
        <Link href={'#'}>About</Link>
        <Link href={'#'}>Press</Link>
        <Link href={'#'}>Careers</Link>
        <Link href={'#'}>Contact</Link>
        <Link href={'#'}>Partners</Link>
      </Stack>
    </Square>
    <Square mt={10} ml={10} size="150px">
      <Stack fontSize={14}>
        <ListHeader>Top Brands</ListHeader>
        <Link href={'#'}>About</Link>
        <Link href={'#'}>Press</Link>
        <Link href={'#'}>Careers</Link>
        <Link href={'#'}>Contact</Link>
        <Link href={'#'}>Partners</Link>
      </Stack>
    </Square>
    <Square mt={8} flex="1" >
      {/* <GridComponent/> */}
      <Grid w={'7xl'} templateColumns="repeat(5, 1fr)" gap={6}>
        <Box w="100%" h="100%">
          <Image
            src="https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="Segun Adebayo"
            boxSize="240px"
            objectFit="cover"
            borderRadius="xl"
          />
          <Text>Mamba Wooden</Text>
          <Text fontWeight="bold" >$39.99</Text>
        </Box>
        <Box w="100%" h="100%">
          <Image
            src="https://images.unsplash.com/photo-1612786143266-b0363a2f9ca1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Segun Adebayo"
            boxSize="240px"
            objectFit="cover"
            borderRadius="xl"
          />
          <Text>Hamilton Bestik</Text>
          <Text fontWeight="bold">$39.99</Text>
        </Box>
        <Box w="100%" h="100%">
          <Image
            src="https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80"
            alt="Segun Adebayo"
            boxSize="240px"
            objectFit="cover"
            borderRadius="xl"
          />
          <Text>Rolex Marsarito</Text>
          <Text fontWeight="bold">$39.99</Text>
        </Box>
        <Box w="100%" h="100%">
          <Image
            src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Segun Adebayo"
            boxSize="240px"
            objectFit="cover"
            borderRadius="xl"
          />
          <Text>Hamilton Automatic</Text>
          <Text fontWeight="bold">$39.99</Text>
        </Box>
        <Box w="100%" h="100%">
          <Image
            src="https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="Segun Adebayo"
            boxSize="240px"
            objectFit="cover"
            borderRadius="xl"
          />
          <Text>Hamilton Automatic</Text>
          <Text fontWeight="bold" >$39.99</Text>
        </Box>

        <Box w="100%" h="100%">
          <Image
            src="https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80"
            alt="Segun Adebayo"
            boxSize="240px"
            objectFit="cover"
            borderRadius="xl"
          />
          <Text>Rolex Marsarito</Text>
          <Text fontWeight="bold">$39.99</Text>
        </Box>
        
      </Grid>      
    </Square>
  
  </Flex>
 
  </>
)
