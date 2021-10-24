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
  export const PaginationComponent = (props) => (
    <>
    <Flex color="white">
      <Square mt={10} size="150px">
      </Square>
      <Square mt={10} ml={10} size="150px">

      </Square>
      <Square mt={8} flex="1" >

          
      <Paginator/>    
      </Square>
    
    </Flex>
   
    </>
  )
  