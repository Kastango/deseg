 import { Button, Flex, Heading, Input } from '@chakra-ui/react'

export default function Home() {
  return (
    
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6} >
        <Heading mb={6}>Login</Heading>
        <Input placeholder="entidade@utfpr.edu.br" variant="filled" mb={3} type="email" />
        <Input placeholder="***********" variant="filled" mb={6} type="password" />
        <Button colorScheme="teal">Log in</Button>
      </Flex>
    </Flex>
  )
}
