import { Button, Flex, Heading, Input, InputGroup, InputLeftAddon, Stack, Table, Text, Textarea, Tr, Thead, Th, Tbody, Td, Spacer, Box } from '@chakra-ui/react'
import { useState } from 'react';

import veiculo1 from '../public/foto-1.jpg'
import Image from 'next/image';

const mock = [
    {
        id: 0,
        placa: 'BRL12E3',
        estacionamento: 1,
        date: '21/08/2021 às 19:00',
        observacao: 'Estacionado em duas vagas',
        imagem: veiculo1,
        contestacao: '',
        status: 0
    },
    {
        id: 1,
        placa: 'BRL12E5',
        estacionamento: 2,
        date: '21/08/2021 às 23:00',
        observacao: 'Estacionado em duas vagas',
        imagem: veiculo1,
        contestacao: 'Não é meu carro',
        status: 1
    },
    {
        id: 2,
        placa: 'BRL12E8',
        estacionamento: 1,
        date: '20/08/2021 às 19:00',
        observacao: 'Estacionado em vaga especial',
        imagem: veiculo1,
        contestacao: 'Eu sou PCD',
        status: 2
    },
    {
        id: 3,
        placa: 'BRL12E3',
        estacionamento: 4,
        date: '21/08/2021 às 19:00',
        observacao: 'Estacionado em duas vagas',
        imagem: veiculo1,
        contestacao: 'Tao loco??',
        status: -1
    }
]

export default function Notifications() {
    const registerOcurrence = () => {
        if (contestacao == '') return

        mock[0].contestacao = contestacao
        mock[0].status = 1
        console.log(mock[0])
        setContestacao('')
    }

    const [contestacao, setContestacao] = useState('')

    return (
        <>
            <Heading mx={20} mt={4}>Suas Notificações de Ocorrências</Heading>
            <Flex overflowX="auto">
                <Table variant="striped" mx={[1, 2, 20]} mt={8} colorScheme="gray">
                    <Thead>
                        <Tr>
                            <Th>Placa</Th>
                            <Th>Estacionamento</Th>
                            <Th>Data e Hora</Th>
                            <Th>Observação</Th>
                            <Th>Imagem do Veículo</Th>
                            <Th>Contestação</Th>
                            <Th isNumeric>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            mock.map(notification => (
                                <Tr key={notification.id}>
                                    <Td>{notification.placa}</Td>
                                    <Td>{notification.estacionamento}</Td>
                                    <Td>{notification.date}</Td>
                                    <Td>{notification.observacao}</Td>
                                    <Td>
                                        <Box width={300} borderRadius={10} overflow="hidden">
                                            <Image src={notification.imagem} alt="veiculo1" />
                                        </Box>
                                    </Td>
                                    {
                                        notification.status == 0 ?
                                            <Td>
                                                <Stack>
                                                    <Textarea minWidth={200} height={100} placeholder="Adicione aqui um texto com uma observação sobre o ocorrido"
                                                        onChange={(e) => setContestacao(e.target.value)} />
                                                </Stack>
                                            </Td>
                                            :
                                            <Td>
                                                <Stack>
                                                    <Text minWidth={200}>{notification.contestacao}</Text>
                                                </Stack>
                                            </Td>
                                    }
                                    {notification.status == 0 ?
                                        <Td isNumeric>
                                            <Button colorScheme="teal" onClick={() => registerOcurrence()}>Contestar</Button>
                                        </Td> : null
                                    }
                                    {notification.status == 1 ?
                                        <Td isNumeric>
                                            <Text fontWeight="bold" color="gray.500">Aguardando Análise</Text>
                                        </Td> : null
                                    }
                                    {notification.status == 2 ?
                                        <Td isNumeric>
                                            <Text fontWeight="bold" color="green.600">Aceita</Text>
                                        </Td> : null
                                    }
                                    {notification.status == -1 ?
                                        <Td isNumeric>
                                            <Text fontWeight="bold" color="red.600">Negada</Text>
                                        </Td> : null
                                    }
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </Flex>
        </>
    )
}