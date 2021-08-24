import { Button, Flex, Heading, Input, InputGroup, Stack, Text, InputRightElement } from '@chakra-ui/react'

export default function ProfileComponent(props) {

    return (
        <>
            <Flex>
                <Stack spacing={4} direction="column" mx={[1, 2, 20]} mt={8} w='full' background="gray.100" p={[6, 12]} rounded={6} >
                    <Heading mb={4}>Seu Perfil</Heading>
                    {props.titles.map(title => (
                        <Stack key={title} spacing={4} direction="row" alignItems="Center">
                            <Text fontSize="lg" fontWeight="bold">{title.title}</Text>
                            <InputGroup variant="outline" colorScheme="teal">
                                <Input type="string" placeholder={props.mock[title.title.toLowerCase()]} />
                                <InputRightElement variant="filled" width="5rem">
                                    <Button colorScheme="teal" h="1.75rem" size="sm" >Editar</Button>
                                </InputRightElement>
                            </InputGroup>
                        </Stack>
                    ))}
                </Stack>
            </Flex>
        </>
    )
}