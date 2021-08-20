import { Button, Flex, Divider,  } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

export default function Profile() {
  const router = useRouter();

  return (
    <Flex direction="column">
      <Flex m={2} mx={[1, 2, 20]} > 
        <Button onClick={() => router.back()}><ChevronLeftIcon w={6} h={6}  color="gray.600"/></Button>
      </Flex>
      <Divider orientation="horizontal" />
    </Flex>
  )
}