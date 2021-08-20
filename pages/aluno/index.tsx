import { Button, Flex, Menu, MenuList, MenuItem, MenuButton, Divider, Link, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon, BellIcon } from '@chakra-ui/icons'

export default function Aluno() {
  return (
    <Flex direction="column">
      <Flex m={2} mx={8} > 
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Cadastro
          </MenuButton>
          <MenuList>
            <MenuItem>Cadastro de Veículos</MenuItem>
            <MenuItem>Cadastro de Servidores</MenuItem>
            <MenuItem>Cadastro de Alunos</MenuItem>
            <MenuItem>Cadastro de Visitantes</MenuItem>
            <MenuItem>Cadastro de Estacionamentos</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Flex alignItems="center" justifyContent="center">
          <BellIcon w={8} h={8}  color="gray.400"/>
          <Link marginLeft={2}>Meu Perfil</Link>
        </Flex>
      </Flex>
      <Divider orientation="horizontal" />
    </Flex>
    
  )
}