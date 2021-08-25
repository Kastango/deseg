import { Button, Flex, Heading, Input, InputGroup, InputLeftAddon, Stack, Table, TableCaption, Tr, Thead, Th, Tbody, Td, Spacer } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'


export default function Cadastro(props) {
    function registerFunction() {
        let formulario = JSON.parse(JSON.stringify(form))

        if (JSON.stringify([...props.titles].sort()).toLowerCase() != JSON.stringify(Object.keys(formulario).sort()).toLowerCase()) return
        if (Object.values(formulario).some((elem) => elem == '')) return

        let novo = JSON.parse(JSON.stringify(mock))
        let form2 = JSON.parse(JSON.stringify(formulario))
        console.log(id)
        if (id > 0 && id <= mock.length) {
            formulario['id'] = id
            novo[id - 1] = formulario
            setMock(novo)
            setId('')
        }
        else {
            formulario['id'] = mock.length + 1
            novo.push(formulario)
            setMock(novo)
        }

        Object.keys(form2).map((key) => {
            form2[key] = ""
        })

        setForm(form2)
    }

    const [mock, setMock] = useState(props.mock)
    const [form, setForm] = useState({})
    const [id, setId] = useState(undefined)

    return (
        <>
            <Flex>
                <Stack spacing={4} direction="column" mx={[1, 2, 20]} mt={8} w='full' background="gray.100" p={12} rounded={6} >
                    <Heading mb={4}>Cadastro de {props.property}</Heading>
                    {props.titles.map(title => (
                        <InputGroup key={title} variant="outline">
                            <InputLeftAddon>{title}</InputLeftAddon>
                            <Input type="string" onChange={e => {
                                let novoForm = JSON.parse(JSON.stringify(form))
                                novoForm[title.toLowerCase()] = e.target.value
                                setForm(novoForm)
                            }} value={form[title.toLowerCase()]} />
                        </InputGroup>
                    ))}
                    <Button colorScheme="teal" onClick={registerFunction}>Cadastrar {props.property}</Button>
                    <Flex>
                        <InputGroup variant="outline">
                            <InputLeftAddon>ID</InputLeftAddon>
                            <Input type="string" placeholder='1' onChange={e => setId(e.target.value)} value={id} />
                        </InputGroup>
                        <Spacer />
                        <Button variant="outline" marginLeft={4} w="full" colorScheme="teal" onClick={() => {
                            if (id <= mock.length && id > 0) {
                                let novo = JSON.parse(JSON.stringify(mock[id - 1]))
                                novo['id'] = undefined
                                setForm(novo)
                            }
                        }}>Editar</Button>
                    </Flex>
                </Stack>
            </Flex>
            <Flex overflowX="auto">
                <Table variant="striped" mx={[1, 2, 20]} mt={8} colorScheme="gray">
                    <TableCaption>{props.property} Cadastrados</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            {props.titles.map(title => (
                                <Th key={title}>{title}</Th>
                            ))}
                            <Th isNumeric>Excluir</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {mock.map((registro) => (
                            <Tr key={registro}>
                                <Td key={registro}>{registro['id']}</Td>
                                {props.titles.map(prop => (
                                    <Td key={registro}>{registro[prop.toLowerCase()]}</Td>
                                ))}
                                <Td isNumeric onClick={() => {
                                    let b = mock.slice(0)
                                    let a = mock.findIndex((r) => r == registro)
                                    b.splice(a, 1)
                                    props.mock.splice(a, 1)
                                    setMock(b)
                                }}><CloseIcon color="red.700" cursor="pointer" /></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Flex>
        </>
    )
}