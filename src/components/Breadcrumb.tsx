import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { ProductCard } from './ProductCard'
import { products } from './_data'
import { ProductGrid } from './ProductGrid'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'

export const BreadcrumbNav = () => (
  <>
    <Breadcrumb
      width={'100%'}
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Category</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Watches</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <Heading as="h3" pt={5}>
      Watches
    </Heading>

    <Flex flex="1" pt={7} width="100%" justifyContent="space-between">
      <Box boxSize="fit-content">
        <Text color="whiteAlpha.700" mt={1} width={'100px'} fontSize={15}>
          Filter by:
        </Text>
      </Box>

      <Flex>
        <Box>
          <Menu closeOnSelect={false}>
            <MenuButton
              borderRadius={10}
              bg="transparent"
              borderWidth={1}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Brand
            </MenuButton>
            <MenuList>
              <Stack pl={6} mt={1} spacing={1}>
                <Checkbox>Cassio</Checkbox>
                <Checkbox>Nike</Checkbox>
                <Checkbox>Reebok</Checkbox>
                <Checkbox>Puma</Checkbox>
                <Checkbox>Tommy Hitifiger</Checkbox>
                <Checkbox>Fossil</Checkbox>
              </Stack>
            </MenuList>
           
          </Menu>
        </Box>
      </Flex>
    </Flex>
  </>
)
