import { Button, Flex, Menu, MenuList, MenuItem, MenuButton, Divider, Link, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon, BellIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

export default function NavBar(props) {
  const router = useRouter();

  return (
    <Flex direction="column">
      <Flex m={2} mx={[1, 2, 20]} >
        {props.elements[0] ?
          <Button onClick={() => router.back()}><ChevronLeftIcon w={6} h={6} color="gray.600" /></Button>
          : null}
        {props.elements[1] ?
          router.pathname == '/admin' ?
            <Menu>
              <MenuButton marginLeft={[1, 2]} as={Button} rightIcon={<ChevronDownIcon />}>
                Cadastro
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => router.push('/cadastro/ocorrencia')}>Cadastro de Ocorrências</MenuItem>
                <MenuItem onClick={() => router.push('/cadastro/veiculo')}>Cadastro de Veículos</MenuItem>
                <MenuItem onClick={() => router.push('/cadastro/servidor')}>Cadastro de Servidores</MenuItem>
                <MenuItem onClick={() => router.push('/cadastro/aluno')}>Cadastro de Alunos</MenuItem>
                <MenuItem onClick={() => router.push('/cadastro/visitante')}>Cadastro de Visitantes</MenuItem>
                <MenuItem onClick={() => router.push('/cadastro/estacionamento')}>Cadastro de Estacionamentos</MenuItem>
              </MenuList>
            </Menu>
            : <Button marginLeft={[1, 2]} onClick={() => router.push('/cadastro/ocorrencia')}>
              Cadastro de Ocorrências
            </Button>
          : null}
        <Spacer />
        <Flex alignItems="center" justifyContent="center">
          {props.elements[2] ?
            <Button onClick={() => router.push(router.pathname + '/profile')} >Meu Perfil</Button>
            : null}
          {props.elements[3] ?
            <Button 
              onClick={() => router.push(router.pathname + '/contest')} 
              marginLeft={[1, 2]}>
                <BellIcon w={6} h={6} color="gray.600" />
            </Button>
            : null}
        </Flex>
      </Flex>
      <Divider orientation="horizontal" />
    </Flex>
  )
}