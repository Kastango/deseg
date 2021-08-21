import { Button, Flex, Heading, Input, InputGroup, InputLeftAddon, Stack, Table, Text, Textarea, Tr, Thead, Th, Tbody, Td, Spacer, Box } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import NavBar  from '../../components/NavBar';
import veiculo1 from '../../public/foto-1.jpg'
import Image from 'next/image';

export default function Servidor() {
  return (
    <>
    <NavBar elements={[1,1,1,0]}/>
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
            <Tr>
              <Td>BRL12E3</Td>
              <Td>1</Td>
              <Td>21/08/2021 às 19:00</Td>
              <Td>Estacionado em duas vagas</Td>
              <Td>
                <Box width={300} borderRadius={10} overflow="hidden">
                  <Image src={veiculo1} alt="veiculo1"/>
                </Box>
              </Td>
              <Td>
                <Stack>
                  <Textarea placeholder="Adicione aqui um texto com uma observação sobre o ocorrido" />
                </Stack>
              </Td>
              <Td isNumeric>
              <Button colorScheme="teal">Contestar</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>BRL12E3</Td>
              <Td>1</Td>
              <Td>21/08/2021 às 19:00</Td>
              <Td>Estacionado em duas vagas</Td>
              <Td>
                <Box width={300} borderRadius={10} overflow="hidden">
                  <Image src={veiculo1} alt="veiculo1"/>
                </Box>
              </Td>
              <Td>
                <Stack>
                  <Text>Adicione aqui um texto com uma observação sobre o ocorrido</Text>
                </Stack>
              </Td>
              <Td isNumeric>
                <Text fontWeight="bold" color="green.600">Aceita</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>BRL12E3</Td>
              <Td>1</Td>
              <Td>21/08/2021 às 19:00</Td>
              <Td>Estacionado em duas vagas</Td>
              <Td>
                <Box width={300} borderRadius={10} overflow="hidden">
                  <Image src={veiculo1} alt="veiculo1"/>
                </Box>
              </Td>
              <Td>
                <Stack>
                  <Text>Adicione aqui um texto com uma observação sobre o ocorrido</Text>
                </Stack>
              </Td>
              <Td isNumeric>
                <Text fontWeight="bold" color="gray.500">Aguardando Análise</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>BRL12E3</Td>
              <Td>1</Td>
              <Td>21/08/2021 às 19:00</Td>
              <Td>Estacionado em duas vagas</Td>
              <Td>
                <Box width={300} borderRadius={10} overflow="hidden">
                  <Image src={veiculo1} alt="veiculo1"/>
                </Box>
              </Td>
              <Td>
                <Stack>
                  <Text>Adicione aqui um texto com uma observação sobre o ocorrido</Text>
                </Stack>
              </Td>
              <Td isNumeric>
                <Text fontWeight="bold" color="red.600">Negada</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
    </Flex>
  </>
  )
}