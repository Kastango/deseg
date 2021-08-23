import { Button, Flex, Heading, Input, InputGroup, InputLeftAddon, Stack, Table, TableCaption, Tr, Thead, Th, Tbody, Td, Spacer } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import NavBar from '../../components/NavBar';

export default function cadastroVeiculo() {
  return (
    <>
      <NavBar elements={[1, 0, 0, 0]} />
      <Flex>
        <Stack spacing={4} direction="column" mx={[1, 2, 20]} mt={8} w='full' background="gray.100" p={12} rounded={6} >
          <Heading mb={4}>Cadastro de Veículos</Heading>
          <InputGroup variant="outline">
            <InputLeftAddon>Tipo</InputLeftAddon>
            <Input type="string" placeholder="Carro / Moto" />
          </InputGroup>
          <InputGroup variant="outline">
            <InputLeftAddon>Modelo</InputLeftAddon>
            <Input type="string" placeholder="modelo do carro" />
          </InputGroup>
          <InputGroup variant="outline">
            <InputLeftAddon>Fabricante</InputLeftAddon>
            <Input type="string" placeholder="Hyundai" />
          </InputGroup>
          <InputGroup variant="outline">
            <InputLeftAddon>Placa</InputLeftAddon>
            <Input type="string" placeholder="BRA2E21" />
          </InputGroup>
          <InputGroup variant="outline">
            <InputLeftAddon>Cor</InputLeftAddon>
            <Input type="string" placeholder="Preto" />
          </InputGroup>
          <Button colorScheme="teal">Cadastrar Veículos</Button>
          <Flex>
            <InputGroup variant="outline">
              <InputLeftAddon>ID</InputLeftAddon>
              <Input type="string" placeholder="3" />
            </InputGroup>
            <Spacer />
            <Button variant="outline" marginLeft={4} w="full" colorScheme="teal">Editar</Button>
          </Flex>
        </Stack>
      </Flex>
      <Flex>
        <Table variant="striped" mx={[1, 2, 20]} mt={8} colorScheme="gray">
          <TableCaption>Veículos Cadastrados</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Tipo</Th>
              <Th>Modelo</Th>
              <Th>Fabricante</Th>
              <Th>Placa</Th>
              <Th>Cor</Th>
              <Th isNumeric>Excluir</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Carro</Td>
              <Td>Gol 2021</Td>
              <Td>Volkswagen</Td>
              <Td>BRA2B19</Td>
              <Td>Branco</Td>
              <Td isNumeric><CloseIcon color="red.700" cursor="pointer" /></Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Carro</Td>
              <Td>Punto 2013</Td>
              <Td>Fiat</Td>
              <Td>AWD1198</Td>
              <Td>Branco</Td>
              <Td isNumeric><CloseIcon color="red.700" cursor="pointer" /></Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Moto</Td>
              <Td>CB300</Td>
              <Td>Honda</Td>
              <Td>AZD1098</Td>
              <Td>Vermelho</Td>
              <Td isNumeric><CloseIcon color="red.700" cursor="pointer" /></Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
    </>
  )
}