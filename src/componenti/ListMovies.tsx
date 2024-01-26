import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/fetch'; 


const ListMovies = () => {
  
  //inizialisco la variabile di stato movies con un valore null

  const [movies, setMovies] = useState(null);


    // uso useEffect hook per fare la fetch  movies quando il componente viene caricato

  useEffect(() => {


    const fetchMovies = async () => {
      try {
        
        // Aspetto il risultato di getMovies e lo inmagazzino in  movieData
        const movieData = await getMovies();
        console.log(movieData);
        
        // Aggiorno la variabile di stato movies con il valore di movieData

        setMovies(movieData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
  
    //Richiamo la funzione fetchMovies

    fetchMovies();
  }, []); // La dependency per assicurare che giri solo una volta

  

  
  return <div>{/* movie list */}</div>;
};

export default ListMovies;