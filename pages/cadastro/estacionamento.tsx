import { Button, Flex, Heading, Input, InputGroup, InputLeftAddon, Stack, Table, TableCaption, Tr, Thead, Th, Tbody, Td, Spacer } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import NavBar from '../../components/NavBar';

export default function cadastroEstacionamento() {
  return (
    <>
      <NavBar elements={[1, 0, 0, 0]} />
      <Flex>
        <Stack spacing={4} direction="column" mx={[1, 2, 20]} mt={8} w='full' background="gray.100" p={12} rounded={6} >
          <Heading mb={4}>Cadastro de Estacionamentos</Heading>
          <InputGroup variant="outline">
            <InputLeftAddon>Id</InputLeftAddon>
            <Input type="string" placeholder="1" />
          </InputGroup>
          <InputGroup variant="outline">
            <InputLeftAddon>Descrição</InputLeftAddon>
            <Input type="string" placeholder="Estacionamento arborizado na frente do centro de eventos" />
          </InputGroup>
          <Button colorScheme="teal">Cadastrar Estacionamento</Button>
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
      <Flex overflowX="auto">
        <Table variant="striped" mx={[1, 2, 20]} mt={8} colorScheme="gray">
          <TableCaption>Veículos Cadastrados</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Descrição</Th>
              <Th isNumeric>Excluir</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Estacionamento 1A</Td>
              <Td isNumeric><CloseIcon color="red.700" cursor="pointer" /></Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Estacionamento 2A</Td>
              <Td isNumeric><CloseIcon color="red.700" cursor="pointer" /></Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Estacionamento 3A</Td>
              <Td isNumeric><CloseIcon color="red.700" cursor="pointer" /></Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
    </>
  )
}