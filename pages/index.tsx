 import { Button, Flex, Heading, Input } from '@chakra-ui/react'
 import { useRouter } from 'next/router'
 import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [slug, setSlug] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    router.push(slug)
  }

  return (
    
    <Flex height="100vh"  alignItems="center" justifyContent="center">
      <Flex direction="column" width="360px" background="gray.100" p={12} rounded={6} >
        <Heading mb={6}>Login</Heading>
        <Input onChange={event => setSlug(event.target.value)} placeholder="aluno / servidor / visitante" variant="filled" mb={3} type="email" />
        <Input placeholder="***********" variant="filled" mb={6} type="password" />
        <Button onClick={handleClick} colorScheme="teal">Log in</Button>
      </Flex>
    </Flex>
  )
}
