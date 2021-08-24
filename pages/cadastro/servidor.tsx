import { Button, Flex, Heading, Input, InputGroup, InputLeftAddon, Stack, Table, TableCaption, Tr, Thead, Th, Tbody, Td, Spacer } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import NavBar from '../../components/NavBar';
import Cadastro from '../../components/cadastro';


const titles = [{
  title: "Nome"
},
{
  title: "Telefone"
},
{
  title: "Ramal"
},
{
  title: "Sala"
},
{
  title: "Cargo"
},
{
  title: "Matrícula"
},
{
  title: "Email"
}]

const mock = [{
  id: 1,
  nome: "Carlao",
  telefone: "(46) 99999-0000",
  ramal: "5001",
  sala: "G3-1",
  cargo: "Professor",
  matricula: "2152000",
  email: "carlao@professor.utfpr.edu"
},
{
  id: 2,
  nome: "Claudia",
  telefone: "(46) 99999-0000",
  ramal: "5002",
  sala: "G3-2",
  cargo: "Diretora",
  matricula: "2152001",
  email: "claudia@professor.utfpr.edu"
}]

export default function cadastroEstacionamento() {
  return (
    <>
      <NavBar elements={[1, 0, 0, 0]} />
      <Cadastro titles={titles} mock={mock} property="Servidores" />
    </>
  )
}