import { useLoaderData } from 'react-router-dom';
import { getMovies } from '../api/fetch';
import ListMoviesDefinitive from '../componenti/ListMoviesDefinitive';
import NavBar from '../componenti/navBar';
import { MovieType } from '../types/movietype';

export async function loaderRoot() {
  const film = await getMovies();
  return film ;

}


export const Home = () => {

  const FilmFromApi = useLoaderData() as MovieType[];
  return (
    <>
      <NavBar />
    <ListMoviesDefinitive movies={FilmFromApi} />
    </>
  )
  
}

export default Home
