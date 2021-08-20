import { Button, Flex, Menu, MenuList, MenuItem, MenuButton, Divider, Link, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon, BellIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter();

  return (
    <Flex direction="column">
      <Flex m={2} mx={8} > 
        <Button onClick={() => router.back()}><ChevronLeftIcon w={8} h={8}  color="gray.600"/></Button>
        <Menu>
          <MenuButton marginLeft={2} as={Button} rightIcon={<ChevronDownIcon />}>
            Cadastro
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => router.push('/cadastro/veiculo')}>Cadastro de Veículos</MenuItem>
            <MenuItem onClick={() => router.push('/cadastro/servidor')}>Cadastro de Servidores</MenuItem>
            <MenuItem onClick={() => router.push('/cadastro/aluno')}>Cadastro de Alunos</MenuItem>
            <MenuItem onClick={() => router.push('/cadastro/visitante')}>Cadastro de Visitantes</MenuItem>
            <MenuItem onClick={() => router.push('/cadastro/estacionamento')}>Cadastro de Estacionamentos</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Flex alignItems="center" justifyContent="center">
          <Button><BellIcon w={8} h={8}  color="gray.600"/></Button>
          <Button marginLeft={2}>Meu Perfil</Button>
        </Flex>
      </Flex>
      <Divider orientation="horizontal" />
    </Flex>
  )
}