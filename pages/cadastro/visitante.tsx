import { Button, Flex, Heading, Input, InputGroup, InputLeftAddon, Stack, Table, TableCaption, Tr, Thead, Th, Tbody, Td, Spacer } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import NavBar  from '../../components/NavBar';

export default function cadastroVisitante() {
  return (
    <>
    <NavBar elements={[1,1,0,0]}/>
    <Flex>
      <Stack spacing={4} direction="column" mx={[1, 2, 20]} mt={8} w='full'  background="gray.100" p={12} rounded={6} >
        <Heading mb={4}>Cadastro de Visitantes da UTFPR</Heading>
        <InputGroup variant="outline">
          <InputLeftAddon>Nome</InputLeftAddon>
          <Input type="string" placeholder="A" />
        </InputGroup>
        <InputGroup variant="outline">
          <InputLeftAddon>CPF</InputLeftAddon>
          <Input type="string" placeholder="111.222.333-4" />
        </InputGroup>
        <InputGroup variant="outline">
          <InputLeftAddon>Telefone</InputLeftAddon>
          <Input type="string" placeholder="(46) 99999-9999" />
        </InputGroup>
        <InputGroup variant="outline">
          <InputLeftAddon>Email</InputLeftAddon>
          <Input type="string" placeholder="usuario@hotmail.com" />
        </InputGroup>
        <Button colorScheme="teal">Cadastrar Visitante</Button>
        <Flex>
          <InputGroup variant="outline">
            <InputLeftAddon>ID</InputLeftAddon>
            <Input type="string" placeholder="3" />
          </InputGroup>
          <Spacer/>
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
              <Td isNumeric><CloseIcon color="red.700" cursor="pointer"/></Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Estacionamento 2A</Td>
              <Td isNumeric><CloseIcon color="red.700" cursor="pointer"/></Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Estacionamento 3A</Td>
              <Td isNumeric><CloseIcon color="red.700" cursor="pointer"/></Td>
            </Tr>
          </Tbody>
        </Table>
    </Flex>
  </>
  )
}