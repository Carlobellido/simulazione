import { Card, CardBody, Divider, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { MovieType } from '../types/movietype'


type MovieCardProps = {
    descrizione: MovieType
}

const MovieCard = ({ descrizione }: MovieCardProps) => {
    return (
        <>
            <HStack margin={3}>

                <Card  maxW='sm' border="solid black 1px"  >


                    <CardBody >

                        <Image
                            src={descrizione.Poster}
                            alt="boh"
                            
                            borderBottom="solid red 3px"
                        />
                        <Divider />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{descrizione.Title}</Heading>
                            <Text>
                                Anno: {descrizione.Year}
                                <br />

                                id :{descrizione.imdbID}

                            </Text>

                        </Stack>
                    </CardBody>


                </Card>

            </HStack>
        </>
    )
}

export default MovieCard
