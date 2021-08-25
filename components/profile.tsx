import { Button, Flex, Heading, Input, InputGroup, Stack, Text, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'

export default function ProfileComponent(props) {

    const [infos, setInfos] = useState(props.titles)
    const [mock, setMock] = useState(props.mock)

    return (
        <>
            <Flex>
                <Stack spacing={4} direction="column" mx={[1, 2, 20]} mt={8} w='full' background="gray.100" p={[6, 12]} rounded={6} >
                    <Heading mb={4}>Seu Perfil</Heading>
                    {infos.map((info) => (
                        <Stack key={info} spacing={4} direction="row" alignItems="Center">
                            <Text fontSize="lg" fontWeight="bold">{info.title}</Text>
                            <InputGroup variant="outline" colorScheme="teal">
                                <Input type="string" value={mock[info.title.toLowerCase()]} onChange={event => {
                                    let novo = JSON.parse(JSON.stringify(mock))
                                    novo[info.title.toLowerCase()] = event.target.value
                                    setMock(novo)
                                }} />
                                <InputRightElement variant="filled" width="5rem">
                                    <Button colorScheme="teal" h="1.75rem" size="sm" onClick={() => {
                                        console.log(mock[info.title.toLowerCase()])
                                        props.mock[info.title.toLowerCase()] = mock[info.title.toLowerCase()]
                                    }}>Editar</Button>
                                </InputRightElement>
                            </InputGroup>
                        </Stack>
                    ))}
                </Stack>
            </Flex>
        </>
    )
}