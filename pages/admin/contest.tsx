import React, { useState, useRef, useEffect } from 'react';

import NavBar from '../../components/NavBar';
import { Button, Flex, Heading, Stack, Table, Text, Tr, Thead, Th, Tbody, Td, Box, Alert, AlertIcon, ScaleFade, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, AlertTitle, AlertDescription, useUnmountEffect} from '@chakra-ui/react'

import veiculo1 from '../../public/foto-1.jpg'
import Image from 'next/image';

export default function Contest() {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()


  const [alert, setAlert] = useState(false);

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 5 seconds
    const timer = setTimeout(() => {
      setAlert(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
      <NavBar elements={[1, 0, 0, 0]} />

      {
      alert ?
       <Alert  pl={20} status="success">
        <AlertIcon/>
        Ocorrência aprovada
      </Alert>
      : null
      }


      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Recusar Ocorrência
            </AlertDialogHeader>

            <AlertDialogBody>
              Você tem Certeza? Essa ação não pode ser desfeita
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Recusar ocorrência
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      
      <Heading mx={20} mt={4}>Avalie as Ocorrências</Heading>
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
                      <Th isNumeric>Avaliar</Th>
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
                              <Image src={veiculo1} alt="veiculo1" />
                          </Box>
                      </Td>
                      <Td>
                          <Stack>
                              <Text>Adicione aqui um texto com uma observação sobre o ocorrido</Text>
                          </Stack>
                      </Td>
                      <Td isNumeric>
                        <Stack direction="row">
                          <Button colorScheme="teal" onClick={() => setAlert(true)} variant="solid" backgroundColor="green.500">Aprovar</Button>
                          <Button colorScheme="teal" onClick={() => setIsOpen(true)} variant="solid" backgroundColor="red.500">Recusar</Button>
                        </Stack>
                      </Td>
                  </Tr>
              </Tbody>
          </Table>
      </Flex>
    </>
  )
}