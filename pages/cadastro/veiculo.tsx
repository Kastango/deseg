import NavBar from '../../components/NavBar';
import Cadastro from '../../components/cadastro';


const titles = [{
  title: "Tipo"
},
{
  title: "Modelo"
},
{
  title: "Fabricante"
},
{
  title: "Placa"
},
{
  title: "Cor"
}]

const mock = [{
  id: 1,
  tipo: "Carro",
  modelo: "Gol 2021",
  fabricante: "Volkswagen",
  placa: "BRA2B19",
  cor: "Branco"
},
{
  id: 2,
  tipo: "Moto",
  modelo: "CB300",
  fabricante: "Honda",
  placa: "AZD1098",
  cor: "Vermelho"
}]


export default function cadastroEstacionamento() {
  return (
    <>
      <NavBar elements={[1, 0, 0, 0]} />
      <Cadastro key={titles} titles={titles} mock={mock} property="Veiculos" />
    </>
  )
}