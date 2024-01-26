import axios from 'axios';

const key = '1c9a98cc';
const baseURL = 'https://www.omdbapi.com/'; 
const title= 'guardians+of+the+galaxy';
// Funzione per avere una lista di film


export  async function getMovies(): Promise<any> {
  try {
    const response = await axios.get(`${baseURL}?apikey=${key}&s=${title}`);
    console.log(response);
    return response.data.Search;
  } catch (error) {
    console.error(error);
  }
}

// Funzione per avere i dettagli di un film
export  async function getDetailMovie(id: string): Promise<any> {
  try {
    const response = await axios.get(`${baseURL}?apikey=${key}&i=${id}`);
    return response.data.Search;
  } catch (error) {
    console.error(error);
  }
}