import { Card, CardBody, Divider, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { getDetailMovie } from '../api/fetch';
import { MovieType } from '../types/movietype';


export async function loaderDetail(id: string) {
    const Dettagli = await getDetailMovie(id);
    return Dettagli;
}
type DetailMovie = {
    dati: MovieType
}



const Dettagli = ({ dati }: DetailMovie) => {


    
    return (
        <>
        <HStack margin={3}>

            <Card maxW='sm' border="solid black 1px"  >


                <CardBody >

                    <Image
                        src={dati.Poster}
                        alt="boh"

                        borderBottom="solid red 3px"
                    />
                    <Divider />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{dati.Title}</Heading>
                        <Text>
                            Anno: {dati.Year}
                            <br />

                            id :{dati.imdbID}

                        </Text>

                    </Stack>
                </CardBody>


            </Card>

        </HStack>
</>

    )}

export default Dettagli
