import NavBar from '../../components/NavBar';
import Cadastro from '../../components/cadastro';


const titles = [{
  title: "Descrição"
}]

const mock = [{
  id: 1,
  descricao: "Estacionamento 1A"
},
{
  id: 2,
  descricao: "Estacionamento 2A"
}]


export default function cadastroEstacionamento() {
  return (
    <>
      <NavBar elements={[1, 0, 0, 0]} />
      <Cadastro titles={titles} mock={mock} property="Estacionamentos" />
    </>
  )
}