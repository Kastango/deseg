import { Button, Flex, Heading, Input, InputGroup, InputLeftAddon, Stack, Table, TableCaption, Tr, Thead, Th, Tbody, Td, Spacer } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'


export default function Cadastro(props) {
    function registerFunction() {
        console.log("saas")

        //TODO Por no onclick do cadastrar se der tempo
        // var novo = {
        //     id: props.mock.length
        // }
        // props.titles.map(title => {
        //     novo[title.title] = document.getElementById(title.title).nodeValue
        // })
        // props.mock.push(novo)
    }

    return (
        <>
            <Flex>
                <Stack spacing={4} direction="column" mx={[1, 2, 20]} mt={8} w='full' background="gray.100" p={12} rounded={6} >
                    <Heading mb={4}>Cadastro de {props.property}</Heading>
                    {props.titles.map(title => (
                        <InputGroup variant="outline">
                            <InputLeftAddon>{title.title}</InputLeftAddon>
                            <Input type="string" />
                        </InputGroup>
                    ))}
                    <Button colorScheme="teal" onClick={registerFunction}>Cadastrar {props.property}</Button>
                    <Flex>
                        <InputGroup variant="outline">
                            <InputLeftAddon>ID</InputLeftAddon>
                            <Input type="string" placeholder={props.mock.length} />
                        </InputGroup>
                        <Spacer />
                        <Button variant="outline" marginLeft={4} w="full" colorScheme="teal">Editar</Button>
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
                                <Th>{title.title}</Th>
                            ))}
                            <Th isNumeric>Excluir</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {props.mock.map(registro => (
                            <Tr>
                                {Object.values(registro).map(prop => (
                                    <Td>{prop}</Td>
                                ))}
                                <Td isNumeric><CloseIcon color="red.700" cursor="pointer" /></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Flex>
        </>
    )
}