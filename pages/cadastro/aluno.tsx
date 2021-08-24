import NavBar from '../../components/NavBar';
import Cadastro from '../../components/cadastro';


const titles = [{
  title: "Nome"
},
{
  title: "Curso"
},
{
  title: "RA"
},
{
  title: "Telefone"
},
{
  title: "Email"
}]

const mock = [{
  id: 1,
  nome: "Guilherme",
  curso: "Engenharia de Software",
  ra: "2152940",
  telefone: "(46) 99900-3443",
  email: "guilherme.tonello21@gmail.com"
},
{
  id: 2,
  nome: "Arthur Sosnowski",
  curso: "Engenharia de Software",
  ra: "2152870",
  telefone: "(46) 99999-0000",
  email: "metroidling@gmail.com"
}]


export default function cadastroEstacionamento() {
  return (
    <>
      <NavBar elements={[1, 0, 0, 0]} />
      <Cadastro titles={titles} mock={mock} property="Alunos" />
    </>
  )
}