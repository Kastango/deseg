import { Button, Flex, Heading, Input, InputGroup, Stack, Text, InputRightElement } from '@chakra-ui/react'

import NavBar from '../../components/NavBar';

export default function Profile() {

  return (
    <>
      <NavBar elements={[1, 0, 0, 0]} />
      <Flex>
        <Stack spacing={4} direction="column" mx={[1, 2, 20]} mt={8} w='full' background="gray.100" p={[6, 12]} rounded={6} >
          <Heading mb={4}>Seu Perfil</Heading>
          <Stack spacing={4} direction="row" alignItems="Center">
            <Text fontSize="lg" fontWeight="bold">Nome</Text>
            <InputGroup variant="outline" colorScheme="teal">
              <Input type="string" placeholder="Guilherme Tonello" />
              <InputRightElement variant="filled" width="5rem">
                <Button colorScheme="teal" h="1.75rem" size="sm" >Editar</Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Stack spacing={4} direction="row" alignItems="Center">
            <Text fontSize="lg" fontWeight="bold">Curso</Text>
            <InputGroup variant="outline" colorScheme="teal">
              <Input type="string" placeholder="Engenharia de Software" />
              <InputRightElement variant="filled" width="5rem">
                <Button colorScheme="teal" h="1.75rem" size="sm" >Editar</Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Stack spacing={4} direction="row" alignItems="Center">
            <Text fontSize="lg" fontWeight="bold">RA</Text>
            <InputGroup variant="outline" colorScheme="teal">
              <Input type="string" placeholder="2060999" />
              <InputRightElement variant="filled" width="5rem">
                <Button colorScheme="teal" h="1.75rem" size="sm" >Editar</Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Stack spacing={4} direction="row" alignItems="Center">
            <Text fontSize="lg" fontWeight="bold">Telefone</Text>
            <InputGroup variant="outline" colorScheme="teal">
              <Input type="string" placeholder="(46) 99902-1111" />
              <InputRightElement variant="filled" width="5rem">
                <Button colorScheme="teal" h="1.75rem" size="sm" >Editar</Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Stack spacing={4} direction="row" alignItems="Center">
            <Text fontSize="lg" fontWeight="bold">Email</Text>
            <InputGroup variant="outline" colorScheme="teal">
              <Input type="string" placeholder="guiTonel@alunos.utfpr.edu.br" />
              <InputRightElement variant="filled" width="5rem">
                <Button colorScheme="teal" h="1.75rem" size="sm" >Editar</Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Stack>
      </Flex>
    </>
  )
}