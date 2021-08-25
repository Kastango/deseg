import NavBar from '../../components/NavBar';
import ProfileComponent from '../../components/profile'

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

const mock = {
  nome: "Guilherme",
  curso: "Engenharia de Software",
  ra: "2152940",
  telefone: "(46) 99900-3443",
  email: "guilherme.tonello21@gmail.com"
}

export default function Profile() {

  return (
    <>
      <NavBar elements={[1, 0, 0, 0]} />
      <ProfileComponent titles={titles} mock={mock} />
    </>
  )
}