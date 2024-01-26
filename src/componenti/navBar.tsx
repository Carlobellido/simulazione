import { Box, Center, HStack, Heading, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const navBar = () => {
    return (
        <Box bg="black" >
            <HStack>
            <Link to="/Home">
            
                <Image
                    borderRadius='full'
                    boxSize='55px'
                    src="/logo.png"
                    alt='Dan Abramov'
                />
                </Link>
                <Center>
                <Heading color="white" textAlign="center">えいが </Heading>
                </Center>
                </HStack >
                

        </Box>
    )
}

export default navBar
