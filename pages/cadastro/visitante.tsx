import NavBar from '../../components/NavBar';
import Cadastro from '../../components/cadastro';


const titles = [
  "Nome"
  ,
  "CPF"
  ,
  "Telefone"
  ,
  "Email"
]

const mock = [{
  id: 1,
  nome: "Guilherme",
  cpf: "01234567890",
  telefone: "(46) 99900-3443",
  email: "guilherme.tonello21@gmail.com"
},
{
  id: 2,
  nome: "Arthur Sosnowski",
  cpf: "01234567890",
  telefone: "(46) 99999-0000",
  email: "metroidling@gmail.com"
}]


export default function cadastroEstacionamento() {
  return (
    <>
      <NavBar elements={[1, 0, 0, 0]} />
      <Cadastro key={titles} titles={titles} mock={mock} property="Visitantes" />
    </>
  )
}