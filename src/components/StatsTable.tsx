import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BsPerson } from 'react-icons/bs'
import { FiServer, FiActivity } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'

export default function BasicStatistics() {
  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>PRODUCTS</Th>
            <Th isNumeric>NUMBER OF CLICKS</Th>
            <Th isNumeric>NUMBER OF PURCHASES</Th>
            <Th isNumeric>ESTIMATED REVENUE</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Balenciaga T-shirt</Td>
            <Td isNumeric>10000</Td>
            <Td isNumeric>25</Td>
            <Td isNumeric>R500,00</Td>
          </Tr>
          <Tr>
            <Td>Adidas T Shirt</Td>
            <Td isNumeric>50 000</Td>
            <Td isNumeric>30.48</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>Motorola Car</Td>
            <Td isNumeric>50 000</Td>
            <Td isNumeric>0.91444</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th >TOTAL</Th>
            <Th isNumeric>100 000</Th>
            <Th isNumeric>50</Th>
            <Th isNumeric>R50 000</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  )
}
