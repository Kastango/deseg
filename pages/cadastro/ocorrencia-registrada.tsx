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

import NavBar from '../../components/NavBar';
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function cadastroEstacionamento() {
  return (
    <>
      <NavBar elements={[1, 0, 0, 0]} />
      <Flex backgroundColor="green.100" direction="column" py={20} alignItems="center" h="94vh">
        <CheckCircleIcon color="green.800" width="32" h="32"></CheckCircleIcon>
        <Heading color="green.800" textAlign="center" display="flex" pt={10} px={[6, 20]}>Ocorrência Registrada com Sucesso</Heading>
      </Flex>
    </>
  )
}