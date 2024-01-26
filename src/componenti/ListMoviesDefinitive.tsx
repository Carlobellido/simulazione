import { Center, SimpleGrid } from '@chakra-ui/react'
import { MovieType } from '../types/movietype'
import MovieCard from './MovieCard'



type moviesListProps = {
    movies: MovieType[]
} 


const ListMoviesDefinitive = ({movies}: moviesListProps) => {
  return (
    <Center>
    <SimpleGrid id="movieItems" columns={3}>
        {
            movies.map((currentMovie) => (
                <MovieCard descrizione={currentMovie} key={currentMovie.imdbID} />
            ))
        }
    </SimpleGrid>
    </Center>
);
}

export default ListMoviesDefinitive
