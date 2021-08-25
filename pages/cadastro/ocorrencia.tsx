import {
    Button,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack,
    InputRightElement,
    Textarea,
    Text,
    Table,
    TableCaption,
    Tr,
    Thead,
    Th,
    Tbody,
    Td,
    Box
} from '@chakra-ui/react';
import { useState } from 'react';

import NavBar from '../../components/NavBar';
import Image from 'next/image';
import campi from '../../public/campi.jpg'


export default function Ocorrencia() {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)

    const [placa, setPlaca] = useState('')

    return (
        <>
            <NavBar elements={[1, 0, 0, 0]} />
            <Flex>
                <Stack spacing={4} direction="column" mx={[1, 2, 20]} mt={8} w='full' background="gray.100" p={12} rounded={6} >
                    <Heading mb={4}>Cadastro de Ocorrência</Heading>
                    <Stack direction={["column", "column", "row"]} spacing={4}>
                        <InputGroup variant="outline">
                            <InputLeftAddon>Estacionamento</InputLeftAddon>
                            <Input type="string" placeholder="A" />
                        </InputGroup>
                        <InputGroup variant="outline" colorScheme="teal">
                            <InputLeftAddon>Placa</InputLeftAddon>
                            <Input type="string" placeholder="BRA2E21" onChange={event => setPlaca(event.target.value)} />
                            <InputRightElement variant="filled" width="10rem">
                                <Button colorScheme="teal" h="1.75rem" size="sm" onClick={onClick}>Consultar placa</Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                    <Stack direction={["column", "column", "row"]} spacing={4}>
                        <InputGroup variant="outline">
                            <InputLeftAddon>Data</InputLeftAddon>
                            <Input type="string" placeholder="21/08/2021" />
                        </InputGroup>
                        <InputGroup variant="outline">
                            <InputLeftAddon>Hora</InputLeftAddon>
                            <Input type="string" placeholder="16:05" />
                        </InputGroup>
                        <InputGroup variant="outline">
                            <InputLeftAddon>Foto do Veículo</InputLeftAddon>
                            <Input paddingTop={1} type="file" colorScheme="teal" />
                        </InputGroup>
                    </Stack>
                    <Stack>
                        <Text ml={4}>Observação</Text>
                        <Textarea placeholder="Adicione aqui um texto com uma observação sobre o ocorrido" />
                    </Stack>
                    <Stack direction="column" alignSelf="center">
                        <Box width={360} borderRadius={10} overflow="hidden">
                            <map name="workmap">
                                <area shape="rect" coords="44,84, 1070,300" alt="Computer" href="/cadastro/ocorrencia-registrada" />
                            </map>
                            <Image src={campi} layout="responsive" placeholder="blur" useMap="#workmap" alt="Imagem aerea do campus dois vizinhos" />
                        </Box>
                        <Text textAlign="center" color="gray.500" fontSize="sm">Clique no estacionamento para cadastrar a ocorrência.</Text>
                    </Stack>
                </Stack>
            </Flex>
            <Flex overflowX="auto">
                {showResults ?
                    <Table variant="striped" mx={[1, 2, 20]} mt={8} colorScheme="gray">
                        <TableCaption>Veículos Consultado</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Placa</Th>
                                <Th>Nome do dono</Th>
                                <Th>Funçao</Th>
                                <Th>CPF</Th>
                                <Th>Telefone</Th>
                                <Th>Email</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{placa}</Td>
                                <Td>Tobias Junior</Td>
                                <Td>Visitante</Td>
                                <Td>Gol 2021</Td>
                                <Td>111.222.333-4</Td>
                                <Td>TobiasJunior@email.com</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    : null
                }
            </Flex>
        </>
    )
}