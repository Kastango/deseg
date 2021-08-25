import NavBar from '../../components/NavBar';
import ProfileComponent from '../../components/profile'

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
    title: "Matricula"
},
{
    title: "Email"
}]

const mock = {
    nome: "Carlao",
    telefone: "(46) 99999-0000",
    ramal: "5001",
    sala: "G3-1",
    cargo: "Professor",
    matricula: "2152000",
    email: "carlao@professor.utfpr.edu"
}

export default function Profile() {

    return (
        <>
            <NavBar elements={[1, 0, 0, 0]} />
            <ProfileComponent key={titles} titles={titles} mock={mock} />
        </>
    )
}