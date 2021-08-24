import NavBar from '../../components/NavBar';
import ProfileComponent from '../../components/profile'

const titles = [{
    title: "Nome"
},
{
    title: "CPF"
},
{
    title: "Telefone"
},
{
    title: "Email"
}]

const mock = {
    id: 1,
    nome: "Guilherme",
    cpf: "01234567890",
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